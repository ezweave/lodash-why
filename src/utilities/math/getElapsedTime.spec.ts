import { getElapsedTime } from "./getElapsedTime"

describe('getElapsedTime', () => {
  it('returns the time diff in seconds', () => {
    expect(
      getElapsedTime(12000, 20000)
    ).toEqual(8);
  })
})