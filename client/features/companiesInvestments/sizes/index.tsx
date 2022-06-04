import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'
import { CompanyType } from '@client/graphql'
import { DonutChart, Title } from '@client/ui'
import { convertDataToChartData } from './lib'

interface Props {
  data: CompanyType[]
}

const Information = styled.div`
  padding: 53px 96px 53px 126px;
  ${({
    theme: {
      colors,
      borderRadius: { smooth },
    },
  }) => css`
    background: ${colors['white-003']};
    border-radius: ${smooth};
  `};
`

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
`

export const CompaniesInvestmentBySize = ({ data }: Props) => {
  const sizes = useMemo(() => convertDataToChartData(data), [data])

  return (
    <Wrapper>
      <Title>Companies by investment size</Title>
      <Information>
        <DonutChart data={sizes} viewBox={120} radius={50} borderSize={15} hasLegend />
      </Information>
    </Wrapper>
  )
}
