import Hex from './Hex.js'

const size = 14;

const DraftHex = ({ y, tileNo, used, selected, onClick }) => (
  <Hex
    classes={(used ? 'used' : '') + (selected ? 'selected' : '')}
    x={`${10 - size / 2}vw`}
    y={`${1 + y * size * 0.866}vw`}
    tileNo={tileNo}
    onClick={onClick}
  />
)

export default DraftHex