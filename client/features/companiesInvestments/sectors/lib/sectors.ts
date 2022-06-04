import { AbstractObjectSignature } from '@client/interfaces'
import { SectorsEnum } from '@client/features/companiesInvestments/enums'
import { FintechIcon, InsuretechIcon, IOTIcon, RoboadvisoryIcon } from '../images'

export const SECTORS = [
  {
    name: SectorsEnum.Fintech,
    icon: FintechIcon,
  },
  {
    name: SectorsEnum.Insuretech,
    icon: InsuretechIcon,
  },
  {
    name: SectorsEnum.Robodvisory,
    icon: RoboadvisoryIcon,
  },
  {
    name: SectorsEnum.IOT,
    icon: IOTIcon,
  },
]

export const sectorsInformation = SECTORS.reduce<AbstractObjectSignature>(
  (acc, { name }) => ({ ...acc, [name]: 0 }),
  {}
)
