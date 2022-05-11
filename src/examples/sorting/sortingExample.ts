import { User } from 'types';
import { sortBy as sortByFP } from 'lodash/fp';

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

export const sortingExample = (users: Array<User>) => {

};
