import { DonutSlice } from '../interfaces'
import { percentToDegrees } from './percentageToDegrees'
import { getCoordFromDegrees } from './getCoordFromDegrees'

export const getSliceCommands = (
  { percent }: DonutSlice,
  radius: number,
  svgSize: number,
  borderSize: number
): string => {
  const degrees = percentToDegrees(percent)
  const longPathFlag = degrees > 180 ? 1 : 0
  const innerRadius = radius - borderSize

  const commands: string[] = []
  commands.push(`M ${svgSize / 2 + radius} ${svgSize / 2}`)
  commands.push(
    `A ${radius} ${radius} 0 ${longPathFlag} 0 ${getCoordFromDegrees(
      degrees,
      radius,
      svgSize
    )}`
  )
  commands.push(`L ${getCoordFromDegrees(degrees, innerRadius, svgSize)}`)
  commands.push(
    `A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${svgSize / 2 + innerRadius} ${
      svgSize / 2
    }`
  )
  return commands.join(' ')
}
