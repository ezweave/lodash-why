import { sortBy as sortByFP } from 'lodash/fp';
import { performance } from 'perf_hooks';

import { Example, Result, User } from '../../types';
import { getElapsedTime } from '../../utilities';

interface SortUsersByLastName {
  (users: Array<User>): Array<User>
}

export const sortUsersByLastNameWithLodash: SortUsersByLastName = 
  sortByFP<User>(['lastName']);

export const sortUsersByLastNameWithJS: SortUsersByLastName = (
  users
) => users.sort(
  ({lastName: lastNameA}, {lastName: lastNameB}) => lastNameA.localeCompare(lastNameB)
);

export const sortByLastNameAlphabetical: Example = (users: Array<User>): Result => {
  const lodashStartTime = performance.now();
  sortUsersByLastNameWithLodash(users);
  const lodashEndTime = performance.now();
  const lodashTime = getElapsedTime(lodashStartTime, lodashEndTime);

  const jsStartTime = performance.now();
  sortUsersByLastNameWithJS(users);
  const jsEndTime = performance.now();
  const jsTime = getElapsedTime(jsStartTime, jsEndTime);

  return {
    jsTime,
    lodashTime,
  };
};
