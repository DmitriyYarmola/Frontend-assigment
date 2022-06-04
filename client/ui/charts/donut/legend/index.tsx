import React from 'react'
import styled from 'styled-components'
import { DonutSlice } from '../interfaces'

interface Props {
  data: DonutSlice[]
}

const ITEMS_PER_COLUMN = 5
const SHOT_SCROLL_WHEN_COUNT_COLUMNS_IS_MORE_THAN = 3

const Item = styled.div`
  display: flex;
  align-items: ${({
    theme: {
      contentPositions: { center },
    },
  }) => center};
  grid-column-gap: 9px;
`

const Color = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: ${({
    theme: {
      borderRadius: { circle },
    },
  }) => circle};
`

const Name = styled.p`
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 18px;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(${ITEMS_PER_COLUMN}, max-content);
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  grid-column-gap: 25px;
  grid-row-gap: 11px;
  padding-bottom: 10px;

  &.customScroll {
    width: 570px;
    overflow-x: scroll;
  }
`

export const Legend = ({ data }: Props) => {
  const addCustomScrollBar =
    data.length / ITEMS_PER_COLUMN > SHOT_SCROLL_WHEN_COUNT_COLUMNS_IS_MORE_THAN
  return (
    <Wrapper className={addCustomScrollBar ? 'customScroll' : ''}>
      {data.map(({ label, color, id }) => (
        <Item key={id}>
          <Color style={{ background: color }} />
          <Name>{label}</Name>
        </Item>
      ))}
    </Wrapper>
  )
}
