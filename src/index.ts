
import { map } from 'lodash';
import { map as mapFP } from 'lodash/fp';

import { findMostPopularLastName, sortByLastNameAlphabetical } from './examples';
import { Result, SolutionIdiom,User } from './types';
import { generateUsers } from './utilities/generators/json/generateUsers';

console.warn('Let\'s see who\'s faster!');

const n = 50;

export const users = generateUsers();

const examples = [
  findMostPopularLastName,
  sortByLastNameAlphabetical,
];

interface TestRunnerFunction {
  (users: Array<User>,
  numberOfRuns: number,
  priority?: (keyof typeof SolutionIdiom)): Result
}
interface TestRunner {
  (examples: Array<TestRunnerFunction>): Array<Result>
}
const runTests: TestRunner = mapFP((exampleFunction: TestRunnerFunction) => exampleFunction(users, n));

const results = runTests(examples);

map(results, result => console.log(result));
