import { sortBy as sortByFP } from 'lodash/fp';

import { ExampleFunction, User } from '../../types';
import { runner } from '../../utilities';

export const sortUsersByLastNameWithLodash: ExampleFunction<User> = 
  sortByFP<User>(['lastName']);

export const sortUsersByLastNameWithJS: ExampleFunction<User> = (
  users
) => users.sort(
  ({lastName: lastNameA}, {lastName: lastNameB}) => lastNameA.localeCompare(lastNameB)
);

export const sortByLastNameAlphabetical = runner(
  'sortByLastNameAlphabetical',
  sortUsersByLastNameWithLodash,
  sortUsersByLastNameWithJS
);
