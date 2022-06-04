import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { CompanyType, GET_COMPANIES } from '@client/graphql'
import { AddNewCompany } from './addNewCompany'
import { CompaniesBySectors } from './sectors'
import { CompaniesInvestmentBySize } from './sizes'
import { CompaniesOverview } from './overview'

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 50px;
`

export const CompaniesInvestments = () => {
  const { loading, error, data } = useQuery<{ companies: CompanyType[] }>(GET_COMPANIES)

  const companies = data?.companies
  if (loading || !companies) {
    return <div>Loading data...</div>
  }

  if (error) {
    return (
      <span>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </span>
    )
  }

  return (
    <Wrapper>
      <CompaniesBySectors data={companies} />
      <CompaniesInvestmentBySize data={companies} />
      <CompaniesOverview data={companies} />
      <AddNewCompany />
    </Wrapper>
  )
}
