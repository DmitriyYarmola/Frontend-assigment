import styled from 'styled-components'
import { CompaniesInvestments } from './features/companiesInvestments'

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export function Page() {
  return (
    <Container>
      <CompaniesInvestments />
    </Container>
  )
}

export default Page
