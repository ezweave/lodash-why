import { map } from 'lodash';

import users from '../../../data/users.json';
import { User } from '../../../types';
import { generateAddress } from './generateAddress';


export const generateUsers = (): Array<User> => map(users, ({
  firstName,
  lastName,
}) => ({
  address: generateAddress(),
  firstName,
  lastName,
}));
