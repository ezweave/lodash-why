
import chalk from 'chalk';
import { map as mapFP } from 'lodash/fp';
import yargs from 'yargs';

import { findMostPopularLastName, sortByLastNameAlphabetical } from './examples';
import { Result, SolutionIdiom,User } from './types';
import { ArgTypes, generateUsers, parseArgs, printResults } from './utilities';


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
if(require.main === module) {
  console.log(chalk.blue.bgGreen.bold('Let\'s see who\'s faster!'));
  
  const {
    numberOfRuns,
  } = parseArgs(yargs.options({
    [ArgTypes.numberOfRuns]: { type: 'number', demandOption: true, alias: 'n' },
    [ArgTypes.generateGraph]: { type: 'boolean', demandOption: false, alias: 'graph' },
    [ArgTypes.randomizeExecution]: { type: 'boolean', demandOption: false, alias: 'randomize' },
  }).argv);

  const runTests: TestRunner = mapFP(
    (exampleFunction: TestRunnerFunction) => exampleFunction(users, numberOfRuns)
  );
  const results = runTests(examples);
  printResults(results);
}
