import { CompanyType } from '@client/graphql'
import { numberWithSpace } from './numberWithSpace'

export const convertDataToTableData = (data: CompanyType[]) =>
  data.map(({ name, sector, stage, investmentSize }) => ({
    name,
    stage,
    sector,
    investmentSize: `${numberWithSpace(investmentSize)} EUR`,
  }))
