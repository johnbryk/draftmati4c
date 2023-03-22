const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('build'))

const fs = require('fs')

const http = require('http')
const { getUnpackedSettings } = require('http2')
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

let drafts = []

const keys = [
  0,
  1, 10,
  2, 11, 20,
  3, 12, 21, 30,
  13, 22, 31,
  14, 23, 32, 41,
  24, 33, 42,
  25, 34, 43, 52,
  35, 44, 53,
  36, 45, 54, 63,
  46, 55, 64,
  56, 65,
  66
]

const adjacent = (key1, key2) => [1, 10, 11].includes(Math.abs(key1-key2))

const adjacents = (key) => {
  const possibilities = [key - 1, key + 1, key - 11, key + 11, key - 10, key + 10]
  return possibilities.filter(possibility => keys.includes(possibility))
}

const hs = [0, 30, 63, 66, 36, 3]
const ring1 = [22, 23, 32, 34, 43, 44]
const ring2 = [11, 12, 13, 21, 24, 31, 35, 42, 45, 53, 54, 55]
const ring3 = [1, 2, 10, 14, 20, 25, 41, 46, 52, 56, 64, 65]

const blues = [
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
  59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 72, 73, 74, 75, 76
]

const reds = [
  39, 40, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 50,
  77, 78, 79, 80
]

const anomalies = [41, 42, 43, 44, 45, 56, 67, 68, 79, 80, 81]

const validatePlacement = (tile, key, round, mapTiles, playerTiles) => {
  // check if in right ring
  if(round === 0 && !ring1.includes(key)) {
    console.log('failure: wrong ring')
    return false
  }
  if((round === 1 || round === 2) && !ring2.includes(key)) {
    console.log('failure: wrong ring')
    return false
  }

  if((round === 3 || round === 4) && !ring3.includes(key)) {
    console.log('failure: wrong ring')
    return false
  }

  //check if empty? maybe be precluded by UI
  if(mapTiles[keys.indexOf(key)]) {
    console.log('failure: space filled')
    return false
  }

  // check if anomaly
  if(!anomalies.includes(tile)) {
    console.log('successs: right ring, free space, not anomaly')
    return true
  }

  // so now we have an anomaly being put in an empty space in the right ring

  // are there adjacent anomalies? if not, all good
  const adjacentTiles = adjacents(key).map(_key => mapTiles[keys.indexOf(_key)])
  const adjacentAnomalies = adjacentTiles.filter(_tile => anomalies.includes(_tile))
  if(adjacentAnomalies.length === 0) {
    console.log('successs: right ring, free space, anomaly but not adjacent to anomalies')
    return true
  }

  // if anom adjacent to anom, check if you have non-anomalies. if so, bad
  const playerTilesLeft = playerTiles.filter(_tile => !mapTiles.includes(_tile))
  const playerNonAnomLeft = playerTilesLeft.filter(_tile => !anomalies.includes(_tile))
  if(playerNonAnomLeft.length > 0) {
    console.log('failure: non-anomalies left in hand')
    return false
  }

  // so we have an anom adjacent to an anom--but is there another place we can put it?
  const ring = round === 0 ? ring1 : round < 3 ? ring2 : ring3
  const keysLeft = ring.filter(_key => mapTiles[keys.indexOf(_key)] === null && _key != key)
  // check each other empty space in ring
  for(let i = 0; i < keysLeft.length; i++) {
    // repeat the adjacent anomaly check, but this time if no anomalies, then this is a valid place
    // to put an anomaly, so false
    const altKey = keysLeft[i]
    const altAdjacentTiles = adjacents(altKey).map(_key => mapTiles[keys.indexOf(_key)])
    const altAdjacentAnomalies = altAdjacentTiles.filter(_tile => anomalies.includes(_tile))
    if(altAdjacentAnomalies.length === 0) {
      console.log('failure: free spaces not adjacent to anomalies left')
      return false
    }
  }

  // if we made it this far... it's an anomaly adjacent to an anomaly but all other empty spaces lead to this, too
  console.log('success: you only have anomalies left and the only free spaces are next to anomalies--ok!')
  return true
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const hashCode = (str, len) => {
  let hash = 0
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i)
      hash = (hash << 5) - hash + chr
      hash |= 0
  }
  hash = Math.abs(hash).toString(16)
  while(hash.length < 8) hash = '0' + hash
  return hash.slice(8-len, 8)
}

fs.readFile(
  './drafts.json',
  (_err, data) => {
    drafts = JSON.parse(data)
  }
)

app.post('/create/draft', (request, response) => {
  const code = hashCode(new Date().toISOString(), 8)
  const newDraft = {...request.body, code: code}

  shuffleArray(blues)
  shuffleArray(reds)

  for(let i = 0; i < 6; i++) {
    for(let j = 0; j < 3; j++) {
      newDraft.players[i].tiles.push(blues[3 * i + j])
    }
    for(let j = 0; j < 2; j++) {
      newDraft.players[i].tiles.push(reds[2 * i + j])
    }
    const hsIndex = keys.findIndex(key => key === hs[i])
    newDraft.mapTiles[hsIndex] = newDraft.players[i].hs
  }

  newDraft.mapTiles[18] = 18

  drafts.push(newDraft)
  fs.writeFile(
    './drafts.json',
    JSON.stringify(drafts, null, 2),
    (err) => {console.log('create error')})
  const players = newDraft.players
  const playersRedacted = players.map(player => ({name: player.name, claimed: player.code.length > 0}))
  response.json({...newDraft, players: playersRedacted})
})

app.get('/load/:code', (request, response) => {
  const code = request.params.code
  const draft = drafts.find(draft => draft.code === code)

  if(draft) {
    const players = draft.players
    const playersRedacted = players.map(player => ({name: player.name, claimed: player.code.length > 0}))
    response.json({...draft, players: playersRedacted})
  }
  else response.status(404).end()
})

app.get('/load/:draftCode/:playerCode', (request, response) => {
  const draftCode = request.params.draftCode
  const draft = drafts.find(draft => draft.code === draftCode)

  const playerCode = request.params.playerCode
  const playerIndex = draft.players.findIndex(player => player.code === playerCode)
  const player = draft.players[playerIndex]

  if(player) {
    const playersRedacted = draft.players.map(player => ({name: player.name, hs: player.hs}))
    const out = {
      code: draft.code,
      playerCode: playerCode,
      playerIndex: playerIndex,
      playerTiles: player.tiles,
      players: playersRedacted,
      mapTiles: draft.mapTiles,
      turn: draft.turn,
      round: draft.round
    }
    response.json(out)
  }
  else response.status(404).end()
})

app.post('/claim/:draftCode/:playerIndex', (request, response) => {
  const draftCode = request.params.draftCode
  const draft = drafts.find(draft => draft.code === draftCode)

  const playerIndex = Number.parseInt(request.params.playerIndex)
  const player = draft.players[playerIndex]

  if(player && player.code === '') {
    const playerCode = hashCode(new Date().toISOString() + player.name + draftCode, 4)
    player.code = playerCode

    fs.writeFile(
      './drafts.json',
      JSON.stringify(drafts, null, 2),
      (err) => {console.log('claim error')})
    
    const playersRedacted = draft.players.map(player => ({name: player.name, hs: player.hs}))
    const out = {
      code: draft.code,
      playerCode: playerCode,
      playerIndex: playerIndex,
      playerTiles: player.tiles,
      players: playersRedacted,
      mapTiles: draft.mapTiles,
      turn: draft.turn,
      round: draft.round
    }
    response.json(out)
  }
  else response.status(404).end()
})

io.on('connection', (socket) => {
  const draftCode = socket.handshake.query.draftCode
  const playerCode = socket.handshake.query.playerCode
  const draft = drafts.find(draft => draft.code === draftCode)
  const playerIndex = draft.players.findIndex(player => player.code === playerCode)

  socket.join(draftCode)

  socket.on('place', (tile, key) => {
    if(draft.round % 2 === 0 && playerIndex !== draft.turn) return
    if(draft.round % 2 === 1 && playerIndex !== 5-draft.turn) return
    if(validatePlacement(tile, key, draft.round, draft.mapTiles, draft.players[playerIndex].tiles)) {
      draft.mapTiles[keys.indexOf(key)] = tile
      draft.turn = (draft.turn + 1) % 6
      if(draft.turn === 0) draft.round += 1

      fs.writeFile(
        './drafts.json',
        JSON.stringify(drafts, null, 2),
        (err) => {console.log('place error')})

      io.to(draftCode).emit('update')
    }
  })
  
})

const PORT = process.env.PORT || 3000
server.listen(PORT)
