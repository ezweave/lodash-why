import {
  getLongestStringLength,
} from './printResults';

describe('getLongestStringLength', () => {
  it('returns the length of the longest string in an array', () => {
    const strings = [
      'one',
      'two',
      'three',
      'four',
    ];

    expect(
      getLongestStringLength(strings)
    ).toEqual(5);
  });
});
