import Hex from './Hex.js'

const size = 14;

const MapHex = ({ ring, x, y, tileNo, onClick }) => (
  <Hex
    classes={ring}
    x={`${40 - size / 2 + (y - x) * size * 0.75}vw`}
    y={`${1 + (x + y) * size * 0.866 / 2}vw`}
    tileNo={tileNo}
    ring={ring}
    onClick={onClick}
  />
)

export default MapHex