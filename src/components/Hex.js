import styled from 'styled-components'
import React from 'react'
import TileInfo from './TileInfo.js'

const PreHex = styled.div`
  top: ${props => props.y};
  left: ${props => props.x};
  background: ${props => props.img};
  background-size: contain;
`

const Hex = ({ classes, x, y, ring, tileNo, onClick }) => (
  <div className='hex-container' onClick={onClick}>
    <PreHex
      className={classes ? `hex ${classes}` : 'hex'}
      x={x}
      y={y}
      img={tileNo ? `url(/img/ST_${tileNo}.png)` : ''}
    />
    <TileInfo
      ring={ring}
      top={y}
      left={x}
      tileNo={tileNo}
    />
  </div>
)

export default Hex