import { generateFloatingPointArrayN } from "./generateFloatingPointArrayN";

describe('generateFloatingPointArrayN', () => {
  it('generates an n-sized array of randomly generated floating point numbers', () => {
    const size = 10;
    const array = generateFloatingPointArrayN(size);
    expect(array.length).toEqual(size);
  });
});