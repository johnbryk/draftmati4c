import tiles from '../data/tiles.js'

const ringInfo = (ring) => {
  if(ring === 'hs') return 'Home System'
  if(ring === 'ring1') return 'Ring 1'
  if(ring === 'ring2') return 'Ring 2'
  if(ring === 'ring3') return 'Ring 3'
}

const br = (content) => (
  <><br />{content}</>
)


const TileInfo = ({ ring, top, left, tileNo, onClick }) => {
  const tile = tileNo ? tiles[tileNo - 1] : null
  return(
    <div
      className="info"
      style={{ top: top, left: left }}
      onClick={onClick}
    >
      {tile ? <>
        {`Tile #${tileNo}`}
        {tile.back === 'green' ? br(`Home System: ${tile.faction}`) : null}
        <PlanetInfo planets={tile.planets} />
        {tile.wormhole ? tile.planets.length === 0 ? br(`Wormhole: ${tile.wormhole}`) : `Wormhole: ${tile.wormhole}` : null}
        {tile.anomaly ? tile.planets.length === 0 || tile.wormhole ? br(`Anomaly: ${tile.anomaly}`) : `Anomaly: ${tile.anomaly}` : null}
        {tile.empty ? br(`Empty System`) : null}
      </> : ringInfo(ring)}
    </div>
  )
}

const PlanetInfo = ({ planets }) => (
  planets.length > 0 ? <>
    <br />
    Planets:
    <ul>
      {planets.map((planet, index) => (
        <li key={index}>{`${planet.name}:`}
          <ul>
            <li>{`Res: ${planet.res}, Inf: ${planet.inf}`}</li>
            {planet.trait ? <li>{`${planet.trait}`}</li>: null}
            {planet.skip ? <li>{`${planet.skip} Tech Skip`}</li>: null}
            {planet.legendary ? <li>Legendary</li>: null}
          </ul>
        </li>
      ))}
    </ul>
  </> : null
)

export default TileInfo