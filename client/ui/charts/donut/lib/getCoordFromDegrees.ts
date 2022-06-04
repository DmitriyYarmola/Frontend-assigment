export const getCoordFromDegrees = (
  angle: number,
  radius: number,
  svgSize: number
): string => {
  const x = Math.cos((angle * Math.PI) / 180)
  const y = Math.sin((angle * Math.PI) / 180)

  const coordX = x * radius + svgSize / 2
  const coordY = y * -radius + svgSize / 2

  return [coordX, coordY].join(' ')
}
