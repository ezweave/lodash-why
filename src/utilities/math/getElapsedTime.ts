import { convertMSToSeconds } from "./convertMSToSeconds";

export const getElapsedTime = (
  timeOne: number,
  timeTwo: number
) => convertMSToSeconds(timeTwo - timeOne);