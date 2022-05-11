import { convertMSToSeconds } from './convertMSToSeconds';

describe('convertMSToSeconds', () => {
  it('converts ms to s', () => {
    expect(
      convertMSToSeconds(12000)
    ).toEqual(12);
  });
});