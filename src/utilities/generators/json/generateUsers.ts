import { map } from 'lodash';
import { User } from 'types';
import users from '../../../data/users.json';
import { generateAddress } from './generateAddress';


export const generateUsers = (): Array<User> => map(users, ({
  firstName,
  lastName
}) => ({
  address: generateAddress(),
  firstName,
  lastName,
}));