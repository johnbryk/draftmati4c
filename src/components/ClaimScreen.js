import React from 'react'
import { useState } from 'react'

// here, draft is all info except:
// -claimed = playerCode.length > 0
// no playerTiles


const ClaimScreen = ({ draft, claimPlayer, loadPlayer }) => {

  const [ values, setValues ] = useState(new Array(6).fill(''))

  const setValue = (num) => (
    (newValue) => {
      setValues(values.map((value, index) => num === index ? newValue : value ))
    }
  )

  return (
    <div className = 'claim'>
      <div>Game Code:</div>
      <div>{draft ? draft.code : null}</div>
      <div></div>
      {[...Array(6).keys()].map(num => <React.Fragment key = {num}>
        <div>{draft.players[num].name}</div>
        {draft.players[num].claimed ?
        <>
          <div><input
            value={values[num]}
            placeholder = "player code"
            onChange = {(event) => setValue(num)(event.target.value)}
          /></div>
          <div><button onClick={() => loadPlayer(values[num])}>Enter</button></div>
        </> :
        <>
          <div><input disabled placeholder = "not yet claimed"/></div>
          <div><button onClick={() => claimPlayer(num)}>Claim</button></div>
        </>
        }
      </React.Fragment>)}
    </div>
  )
}

export default ClaimScreen