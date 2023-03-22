import DraftHex from './DraftHex.js'

const Draft = ({ playerTiles, tileNos, selected, setSelected }) =>  {

  const onClick = (index) => {
    if(tileNos.includes(playerTiles[index])) return
    if(selected === index) setSelected(-1)
    else setSelected(index)
  }

  return (
    <div className='draft'>
      {playerTiles.map((tile, index) => (
        <DraftHex
          key={tile}
          y={index}
          tileNo={tile}
          used={tileNos.includes(tile)}
          selected={selected === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  )
}

export default Draft