export const formatNumber = (
  value: number,
  options: Intl.NumberFormatOptions
) => {
  return new Intl.NumberFormat('en-US', options).format(value)
}
