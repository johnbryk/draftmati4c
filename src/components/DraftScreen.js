import Draft from './Draft.js'
import Map from './Map.js'
import Menu from './Menu.js'

import { useState } from 'react'

import { io } from 'socket.io-client'

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

const DraftScreen = ({ draft, loadPlayer, viewMap }) => {

  const [selected, setSelected] = useState(-1)

  const socket = io(__dirname, {query: {draftCode: draft.code, playerCode: draft.playerCode}})

  socket.on('update', () => {
    if(draft.playerIndex === -1) {
      viewMap()
    } else {
      loadPlayer(draft.playerCode)
      setSelected(-1)
    }
  })

  const activeIndex = draft.round % 2 === 0 ? draft.turn : (5 - draft.turn)

  const onClick = (key) => (() => {
    if(activeIndex !== draft.playerIndex) return
    if(selected > -1 && !draft.mapTiles[keys.indexOf(key)]) 
    {
      socket.emit('place', draft.playerTiles[selected], key)
    }
  })

  return (
    <>
      <Menu draft = { draft } />
      <div className='display'>
        <Draft playerTiles = {draft.playerTiles} tileNos={draft.mapTiles} selected={selected} setSelected={setSelected}/>
        <Map keys={keys} tileNos = {draft.mapTiles} onClick={onClick}/>
      </div>
    </>
  )
}

export default DraftScreen
