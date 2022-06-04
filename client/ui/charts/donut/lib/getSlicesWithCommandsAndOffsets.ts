import { DonutSlice, DonutSliceWithCommands } from '../interfaces'
import { getSliceCommands } from './getSliceCommands'

export const getSlicesWithCommandsAndOffsets = (
  donutSlices: DonutSlice[],
  radius: number,
  svgSize: number,
  borderSize: number
): DonutSliceWithCommands[] => {
  let previousPercent = 0
  return donutSlices.map((slice) => {
    const sliceWithCommands: DonutSliceWithCommands = {
      ...slice,
      commands: getSliceCommands(slice, radius, svgSize, borderSize),
      offset: previousPercent * 3.6 * -1,
    }
    previousPercent += slice.percent
    return sliceWithCommands
  })
}
