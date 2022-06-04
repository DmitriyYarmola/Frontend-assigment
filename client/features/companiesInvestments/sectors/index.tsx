import React, { useMemo } from 'react'
import styled from 'styled-components'
import { CompanyType } from '@client/graphql'
import { SectorCard, Title } from '@client/ui'
import { countSectors, SECTORS } from './lib'

interface Props {
  data: CompanyType[]
}

const Sectors = styled.div`
  display: flex;
  justify-content: ${({
    theme: {
      contentPositions: { spaceBetween },
    },
  }) => spaceBetween};
  grid-column-gap: 10px;
`

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
`

export const CompaniesBySectors: React.FC<Props> = ({ data }) => {
  const sectorsCounts = useMemo(() => countSectors(data), [data])

  return (
    <Wrapper>
      <Title>Companies by sectors</Title>
      <Sectors>
        {SECTORS.map(({ name, icon }) => {
          const value = sectorsCounts[name]
          return <SectorCard key={name} icon={icon} name={name} value={String(value)} />
        })}
      </Sectors>
    </Wrapper>
  )
}
