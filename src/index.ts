
import { map } from 'lodash';
import { map as mapFP } from 'lodash/fp';

import { sortByLastNameAlphabetical } from './examples';
import { Example, TestRunResult } from './types';
import { generateUsers } from './utilities/generators/json/generateUsers';

console.warn('Hello, shitbirds', generateUsers.name);

export const users = generateUsers();

const examples = [
  sortByLastNameAlphabetical,
];

interface TestRunner {
  (examples: Array<Example>): Array<TestRunResult>
}
const runTests: TestRunner = mapFP((exampleFunction: Example) => ({
    [`${exampleFunction.name}`]: exampleFunction(users),
  })
);

const results = runTests(examples);

map(results, result => console.log(result));
