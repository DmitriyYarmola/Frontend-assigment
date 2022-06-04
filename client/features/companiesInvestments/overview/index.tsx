import React, { useMemo } from 'react'
import styled from 'styled-components'
import { CompanyType } from '@client/graphql'
import { Table, Title } from '@client/ui'
import { convertDataToTableData, tableHeaders } from './lib'

interface Props {
  data: CompanyType[]
}

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
`

export const CompaniesOverview: React.FC<Props> = ({ data }) => {
  const tableData = useMemo(() => convertDataToTableData(data), [data])

  return (
    <Wrapper>
      <Title>Companies overview</Title>
      <Table data={tableData} headers={tableHeaders} />
    </Wrapper>
  )
}
