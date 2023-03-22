import StartScreen from "./StartScreen.js"
import CreateScreen from "./CreateScreen.js"
import ClaimScreen from "./ClaimScreen.js"
import DraftScreen from "./DraftScreen.js"
import { useState, useEffect } from 'react'
import axios from 'axios'

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

const App = () => {

  const [ screen, setScreen ] = useState('start')
  const [ draft, setDraft ] = useState(null)

  useEffect(() => {
    if (localStorage.draftCode && localStorage.playerCode) {
      axios
        .get(`/load/${localStorage.draftCode}/${localStorage.playerCode}`)
        .then(res => {
          setDraft(res.data)
          setScreen('draft')
        })
        .catch(_error => window.alert('Player code not found.'))
    } else if (localStorage.draftCode) {
      axios
        .get(`/load/${localStorage.draftCode}`)
        .then(res => {
          setDraft(res.data)
          setScreen('claim')
        })
        .catch(_error => window.alert('Draft code not found.'))
    }
  }, [])
  
  const createDraft = (newDraft) => {
    if(!newDraft) return
    if(newDraft.players.map(player => player.hs).includes(-1)) {
      window.alert('Please select 6 factions.')
      return
    }
    if(newDraft.players.map(player => player.name).includes('')) {
      window.alert('Please name all players.')
      return
    }
    if(new Set(newDraft.players.map(player => player.name)).size < 6) {
      window.alert('Please give players unique names.')
      return
    }
    axios
      .post('/create/draft', newDraft)
      .then(res => {
        setDraft(res.data)
        setScreen('claim')
      })
      .catch(_error => window.alert('Somethig went wrong.'))
  }

  const loadDraft = (draftCode) => {
    if(draftCode) {
    axios
      .get(`/load/${draftCode}`)
      .then(res => {
        setDraft(res.data)
        setScreen('claim')
      })
      .catch(_error => window.alert('Draft code not found.'))
    }
  }

  const claimPlayer = (playerIndex) => {
    console.log(draft.players[playerIndex])
    if(draft.players[playerIndex].claimed) return
    axios
      .post(`/claim/${draft.code}/${playerIndex}`)
      .then(res => {
        setDraft(res.data)
        setScreen('draft')
      })
      .catch(_error => window.alert('Something went wrong.'))
  }

  const loadPlayer = (playerCode) => {
    axios
      .get(`/load/${draft.code}/${playerCode}`)
      .then(res => {
        setDraft(res.data)
        setScreen('draft')
        localStorage.draftCode = draft.code
        localStorage.playerCode = playerCode
      })
      .catch(_error => window.alert('Player code not found.'))
  }

  return (
    <>
      {
        screen === 'start' ? <StartScreen startNewDraft = {() => setScreen('create')} loadDraft = {loadDraft} /> :
        screen === 'create' ? <CreateScreen createDraft = {createDraft} /> :
        screen === 'claim' ? <ClaimScreen draft = {draft} claimPlayer = {claimPlayer} loadPlayer = {loadPlayer} /> :
        screen === 'draft' ? <DraftScreen draft = {draft} loadPlayer = {loadPlayer} /> : null
      }
    </>
  )
}

export default App