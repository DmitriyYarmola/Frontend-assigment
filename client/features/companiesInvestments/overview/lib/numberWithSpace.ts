export const numberWithSpace = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
