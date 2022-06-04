import React from 'react'
import styled from 'styled-components'
import { Legend } from './legend'
import { getSlicesWithCommandsAndOffsets } from './lib'
import { DonutSlice } from './interfaces'

interface Props {
  data: DonutSlice[]
  radius: number
  viewBox: number
  borderSize: number
  hasLegend?: boolean
}

const Count = styled.text`
  transform: translate(46%, 50%);
  font-weight: ${({
    theme: {
      fontWeights: { bold },
    },
  }) => bold};
  fill: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`

const Label = styled.text`
  fill: ${({
    theme: {
      colors: { grey },
    },
  }) => grey};
  font-weight: ${({
    theme: {
      fontWeights: { semiBold },
    },
  }) => semiBold};
  transform: translate(37%, 59%);
  font-size: 6px;
`

const Svg = styled.svg`
  overflow: visible;
  transform-origin: center;
  width: 100%;
  max-width: 300px;

  path {
    transform-origin: center;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`

const Chart = styled.div`
  display: flex;
  align-items: ${({
    theme: {
      contentPositions: { center },
    },
  }) => center};
  grid-column-gap: 130px;
`

export const DonutChart = ({ data, radius, viewBox, borderSize, hasLegend }: Props) => (
  <Chart>
    <Svg viewBox={`0 0 ${viewBox} ${viewBox}`}>
      {getSlicesWithCommandsAndOffsets(data, radius, viewBox, borderSize).map(
        ({ color, commands, offset, id }) => (
          <path fill={color} d={commands} transform={`rotate(${offset})`} key={id} />
        )
      )}
      <Count>{data.length}</Count>
      <Label>Companies</Label>
    </Svg>
    {hasLegend && <Legend data={data} />}
  </Chart>
)
