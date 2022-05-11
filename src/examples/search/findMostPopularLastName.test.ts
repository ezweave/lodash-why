import users from '../../data/users.json';
import { 
  findMostPopularLastNameWithJS, 
  findMostPopularLastNameWithLodash,
} from './findMostPopularLastName';

describe('findMostPopularLastName', () => {
  it('finds the most popular last name with both methods and the results are the same', () => {
    const lodashResult = findMostPopularLastNameWithLodash(users);
    const jsResult = findMostPopularLastNameWithJS(users);

    expect(lodashResult).toEqual(jsResult);
  });
});
