import { Address } from "./Address";

export interface User {
  address: Address,
  firstName: string,
  lastName: string,
  middleInitial?: string,
}