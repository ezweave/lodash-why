import chalk from 'chalk';
import { flow, head, join, reduce, reverse, size } from 'lodash';
import { map as mapFP, sortBy as sortByFP } from 'lodash/fp';
import emoji from 'node-emoji';

import { Result, SolutionIdiom } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const chart = require('ascii-horizontal-barchart');

const coffee = emoji.get('coffee');
const dash = emoji.get('dash');
const star = emoji.get('star');
const medal = emoji.get('sports_medal');

const getEmojiForWinner = (winner: keyof typeof SolutionIdiom ) => {
  switch(winner) {
    case SolutionIdiom.JAVASCRIPT:
      return coffee;
    case SolutionIdiom.LODASH:
      return dash;
    default:
      return star;
  }
};

interface GetLongestStringLength {
  (strings: Array<string>): number
}

export const getLongestStringLength: GetLongestStringLength = flow(
  sortByFP(size),
  reverse,
  head,
  size
);

export const buildSeperator = (seperator: string) => (n: number) => Array(n).fill(seperator).join('');

export const stringifyResult = ({
  entrySetSize, 
  jsTime, 
  lodashTime, 
  name, 
  numberOfRuns, 
  winner,
}: Result) => {
  const jsTimeText = winner === SolutionIdiom.JAVASCRIPT ? chalk.greenBright.bold(jsTime) : chalk.red.bold(jsTime);
  const lodashTimeText = winner === SolutionIdiom.LODASH ? chalk.greenBright.bold(lodashTime) : chalk.red.bold(lodashTime);

  const strings = [
   `${chalk.greenBright('Test')}: ${name}`,
   `${chalk.whiteBright('Entry Set Size')}: ${chalk.blueBright(entrySetSize)}`,
   `${chalk.whiteBright('JavaScript average execution time')}: ${jsTimeText} seconds`,
   `${chalk.whiteBright('Lodash average execution time')}: ${lodashTimeText} seconds`,
   `${chalk.whiteBright('Number of executions')}: ${chalk.magentaBright(numberOfRuns)}`,
   `${chalk.yellowBright('Winner')}: ${chalk.white.bgGreenBright(' ' + winner + ' ')} ${getEmojiForWinner(winner)} ${medal}`,
  ];

  const longestStringLength = getLongestStringLength(strings);
  const seperator = buildSeperator('-')(longestStringLength);

  return `${seperator}\n${join(strings, '\n')}`;
}; 

interface PrintResults {
  (results: Array<Result>): void 
}

export const printResults: PrintResults = flow(
  mapFP((result: Result) => {
    const printableResult = stringifyResult(result);
    console.log(printableResult);
    console.log('\n');
    return result;
  }),
  results => reduce(results, ({
    totalExecutions,
    totalJSTime,
    totalLodashTime,
  }, {
    jsTime,
    lodashTime,
    numberOfRuns,
  }) => ({
    totalExecutions: totalExecutions + numberOfRuns,
    totalLodashTime: totalLodashTime + lodashTime,
    totalJSTime: totalJSTime + jsTime,
  }),
  {
    totalExecutions: 0,
    totalJSTime: 0,
    totalLodashTime: 0,
  }),
  (totals) =>  {
    const {
      totalJSTime,
      totalLodashTime,
    } = totals;
    console.log(
      chart({
        'JavaScript total time': totalJSTime,
        'Lodash total time': totalLodashTime,
      })
    );
    return totals;
  },
  (totals) => {
    const { 
      totalExecutions,
      totalJSTime,
      totalLodashTime,
    } = totals;

    console.log(`JavaScript took a total of ${totalJSTime.toFixed(4)} seconds over ${totalExecutions} runs`);
    console.log(`Lodash took a total of ${totalLodashTime.toFixed(4)} seconds over ${totalExecutions} runs`);
  }
);
