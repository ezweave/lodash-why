import { User } from "./User"
import { Result } from "./Result"

export interface Example {
  (user: Array<User>): Result 
}