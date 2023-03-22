import MapHex from './MapHex.js'

const ring1 = [22, 23, 32, 34, 43, 44]
const ring2 = [11, 12, 13, 21, 24, 31, 35, 42, 45, 53, 54, 55]
const ring3 = [1, 2, 10, 14, 20, 25, 41, 46, 52, 56, 64, 65]
const hs = [0, 3, 30, 36, 63, 66]

const ring = (key) => {
  if(ring1.includes(key)) return 'ring1'
  if(ring2.includes(key)) return 'ring2'
  if(ring3.includes(key)) return 'ring3'
  if(hs.includes(key)) return 'hs'
  if(key === 33) return 'mr'
}

const Map = ({ keys, tileNos, onClick }) => (
  <div className='map'>
    {keys.map((key, index) => (
      <MapHex
        key={key}
        ring={ring(key)}
        x={key % 10}
        y={Math.floor(key / 10)}
        tileNo={tileNos[index]}
        onClick={onClick(key)}
      />
    ))}
  </div>
)

export default Map