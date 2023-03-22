import styled from 'styled-components'

const GridArea = styled.div`
  grid-area: ${props => props.area};
`

const Menu = ({ draft }) => {

  const activeIndex = draft.round % 2 === 0 ? draft.turn : (5 - draft.turn)

  const nextIndex = draft.turn < 5 ?
    (draft.round % 2 === 0 ?
      draft.turn + 1 :
      (4 - draft.turn)
    ) :
    (draft.round % 2 === 0 ?
      5 :
      0
    )

  return(
    <div className='menu'>
      <GridArea area='gcode'>Draft Code: {draft.code}</GridArea>
      <GridArea area='pcode'>{draft.players[draft.playerIndex].name}'s Player Code: {draft.playerCode} </GridArea>
      <GridArea area='atbat'>{activeIndex === draft.playerIndex ? "Your" : `${draft.players[activeIndex].name}'s`} Turn</GridArea>
      <GridArea area='ondeck'>Up Next: {nextIndex === draft.playerIndex ? "You" : draft.players[nextIndex].name} {nextIndex === activeIndex ? "again" : null}</GridArea>
      <GridArea area='round'>Round {draft.round + 1}</GridArea>
      <GridArea area='turn'>Turn {draft.turn + 1}</GridArea>
    </div>
  )
}

export default Menu