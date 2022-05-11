import { Result } from './Result';
import { User } from './User';

export interface Example {
  (users: Array<User>): Result 
}
