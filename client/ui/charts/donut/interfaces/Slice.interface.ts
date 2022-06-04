export interface DonutSlice {
  id: string
  percent: number
  color: string
  label?: string
}

export interface DonutSliceWithCommands extends DonutSlice {
  offset: number
  commands: string
}
