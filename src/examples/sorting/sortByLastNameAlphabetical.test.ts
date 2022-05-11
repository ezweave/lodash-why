import { users } from '../../index';
import { sortByLastNameAlphabetical } from './sortByLastNameAlphabetical';

describe('sortByLastNameAlphabetical', () => {
  it('sorts with two methods', () => {
    const result = sortByLastNameAlphabetical(users);
    const {
      jsTime,
      lodashTime,
    } = result;
    expect(jsTime).toBeTruthy();
    expect(lodashTime).toBeTruthy();
    const lodashWins = lodashTime < jsTime;
    expect(lodashWins).toEqual(true);
  });
});
