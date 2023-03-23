import { useState } from 'react'

const StartScreen = ({ startNewDraft, loadDraft }) => {

  const [ value, setValue ] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const Star = () => (
    <span className='star'> <sup>✦</sup> </span>
  )

  const TI4 = () => (
    <span className='ti4'>TI<sub>4</sub></span>
  )

  return (
    <div className='start'>
      <div className='title'>
        DRAFT<Star />MA<TI4 />C
      </div>
      <div>
        <button onClick={startNewDraft}>New Draft</button>
      </div>
      <hr />
      <div>
        <button onClick={() => loadDraft(value)}>Load Draft</button>
      </div>
      <div>
        <input placeholder={"draft code"} value={value} onChange={handleChange} />
      </div>
    </div>
  )
}

export default StartScreen