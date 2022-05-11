export const convertMSToSeconds = (
  milliseconds: number
) => Number(((milliseconds % 60000) / 1000).toFixed(0));