import users from '../../data/users.json';
import { findMostPopularLastNameWithLodash } from './findMostPopularLastName';

describe('findMostPopularLastNameWithLodash', () => {
  it('finds the most popular last name', () => {
    const result = findMostPopularLastNameWithLodash(users);

    console.warn(result);
  });
});
