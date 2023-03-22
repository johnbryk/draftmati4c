import { useState } from 'react'
import React from 'react'

const factions = [
  {faction: 'The Arborec', tileNo: 5},
  {faction: 'The Argent Flight', tileNo: 58},
  {faction: 'The Barony of Letnev', tileNo: 10},
  {faction: 'The Clan of Saar', tileNo: 11},
  {faction: 'The Embers of Muaat', tileNo: 4},
  {faction: 'The Emirates of Hacan', tileNo: 16},
  {faction: 'The Empyrean', tileNo: 56},
  {faction: 'The Federation of Sol', tileNo: 1},
  {faction: 'The Ghosts of Creuss', tileNo: 17},
  {faction: 'The L1Z1X Mindnet', tileNo: 6},
  {faction: 'The Mahact Gene-Sorcerers', tileNo: 52},
  {faction: 'The Mentak Coalition', tileNo: 2},
  {faction: 'The Naalu Collective', tileNo: 9},
  {faction: 'The Naaz-Rokha Alliance', tileNo: 57},
  {faction: 'The Nekro Virus', tileNo: 8},
  {faction: 'The Nomad', tileNo: 53},
  {faction: 'Sardakk N\'orr', tileNo: 13},
  {faction: 'The Titans of Ul', tileNo: 55},
  {faction: 'The Universities of Jol-Nar', tileNo: 12},
  {faction: 'The Vuil\'Raith Cabal', tileNo: 54},
  {faction: 'The Winnu', tileNo: 7},
  {faction: 'The Xxcha Kingdom', tileNo: 14},
  {faction: 'The Yin Brotherhood', tileNo: 3},
  {faction: 'The Yssaril Tribes', tileNo: 15}
]

const CreateScreen = ({ createDraft }) => {

  const [ newDraft, setNewDraft ] = useState({
    code: '',
    players: new Array(6).fill({code: '', name: '', hs: -1, tiles: new Array(0)}),
    mapTiles: new Array(37).fill(null),
    round: 0,
    turn: 0
  })

  const setName = (num) => (
    (name) => {
      const updatePlayers = newDraft.players.map((player, playerIndex) => (
        playerIndex === num - 1 ? {...player, name: name} : player
      ))
      const updateDraft = {...newDraft, players: updatePlayers}
      setNewDraft(updateDraft)
    }
  )

  const setHS = (num) => (
    (hs) => {
      const updatePlayers = newDraft.players.map((player, playerIndex) => (
        playerIndex === num - 1 ? {...player, hs: hs} : player
      ))
      const updateDraft = {...newDraft, players: updatePlayers}
      setNewDraft(updateDraft)
    }
  )

  const selected = newDraft.players.map(player => Number.parseInt(player.hs))

  const randomize = () => {
    const probs = new Array(6).fill(0).map(_index => Math.random(0))
    const indices = probs.map(prob => probs.reduce((prev, curr) => (prob > curr) + prev, 0))
    const randomizedPlayers = newDraft.players.map((_player, index) => newDraft.players[indices[index]])
    setNewDraft(newDraft => ({...newDraft, players: randomizedPlayers}))
  }

  return (
    <div className = 'setup'>
      {[...Array(7).keys()].map(num => <React.Fragment key={num}>
        {num === 0 ? <>
          <div>Player</div> <div>Faction</div>
        </> : <>
            <PlayerName num={num} value={newDraft.players[num-1].name} setValue={setName(num)}/>
            <PlayerFaction value={newDraft.players[num-1].hs} setValue={setHS(num)} selected={selected}/>
        </>}
      </React.Fragment>)}
      <button onClick={() => createDraft(newDraft)}>Submit</button>
      <button onClick={randomize}>Radomize Order</button>
    </div>
  )
}

const PlayerName = ({ num, value, setValue }) => {

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
  return (
    <input
      placeholder={num === 1 ? 'Speaker' : `Player ${num}`}
      value={value}
      onChange={handleChange}
    />
  )
}

const PlayerFaction = ({ value, setValue, selected }) => {

  const handleChange = (event) => {
    setValue(Number.parseInt(event.target.value))
  }

  return (
    <select value={value} onChange={handleChange} >
      <option value={-1}>--Select a Faction</option>
      {factions.map(item => (
        <option
          key={item.tileNo}
          value={item.tileNo}
          disabled={Number.parseInt(value) !== item.tileNo && selected.includes(item.tileNo)}
        >{item.faction}</option>
      ))}
    </select>
  )
}

export default CreateScreen