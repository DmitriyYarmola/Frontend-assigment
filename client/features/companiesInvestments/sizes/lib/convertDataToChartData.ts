import { CompanyType } from '@client/graphql'
import { generateRandomColor } from './generateRandomColor'

export const convertDataToChartData = (data: CompanyType[]) => {
  const sum = data.reduce((acc, { investmentSize }) => acc + investmentSize, 0)
  return data.map(({ investmentSize, id, name: label }) => ({
    id,
    label,
    color: generateRandomColor(),
    percent: (investmentSize / sum) * 100,
  }))
}
