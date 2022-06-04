import { CompanyType } from '@client/graphql'
import { sectorsInformation } from './sectors'

export const countSectors = (data: CompanyType[]) => {
  const result = data.reduce((acc, { sector }) => {
    const sectorKey = sector as keyof typeof sectorsInformation
    const countBySector = acc[sectorKey]
    return { ...acc, [sectorKey]: Number(countBySector) + 1 }
  }, sectorsInformation)
  return result
}
