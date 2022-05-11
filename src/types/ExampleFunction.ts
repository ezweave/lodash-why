import { User } from './User';

export interface ExampleFunction<T> {
  (users: Array<User>): Array<T> | T
}
