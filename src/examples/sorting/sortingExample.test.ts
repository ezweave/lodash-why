import { users } from '../../index';
import { sortingExample } from './sortingExample';

describe('sortingExample', () => {
  it('sorts with two methods', () => {
    const result = sortingExample(users);
    console.warn('RESULT', result);
    const {
      jsTime,
      lodashTime
    } = result;
    expect(jsTime).toBeTruthy();
    expect(lodashTime).toBeTruthy();
    const lodashWins = lodashTime < jsTime;
    expect(lodashWins).toEqual(true);
  })
})