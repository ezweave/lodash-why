
import { generateUsers } from './utilities/generators/json/generateUsers';
import { sortByLastNameAlphabetical } from './examples';
import { map as mapFP } from 'lodash/fp';
import { Example, TestRunResult } from './types';
import { map } from 'lodash';

console.warn('Hello, shitbirds', generateUsers.name);

export const users = generateUsers();

const examples = [
  sortByLastNameAlphabetical
];

interface TestRunner {
  (examples: Array<Example>): Array<TestRunResult>
}
const runTests: TestRunner = mapFP((exampleFunction: Example) => ({
    [`${exampleFunction.name}`]: exampleFunction(users)
  })
);

const results = runTests(examples);

map(results, result => console.log(result))