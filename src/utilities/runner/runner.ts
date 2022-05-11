import { sum, times } from 'lodash';
import { performance } from 'perf_hooks';

import { ExampleFunction, Result, SolutionIdiom, User } from '../../types';
import { getElapsedTime } from '../math/getElapsedTime';

const runFunctionAndGetTime = <T>(func: ExampleFunction<T>, users: Array<User>) => {
  const startTime = performance.now();
  func(users);
  const endTime = performance.now();
  return getElapsedTime(startTime, endTime);
}

const runFunctionNTimeAndGetAverageTime = <T>(
  func: ExampleFunction<T>, 
  users: Array<User>, 
  n: number) => {
  const runTimes = times(n, () => runFunctionAndGetTime<T>(func, users));
  const total = sum(runTimes)
  return Number((total / n).toFixed(4));
}


export const runner = <T>(
  name: string,
  lodashFunction: ExampleFunction<T>,
  jsFunction: ExampleFunction<T>
) => (
  users: Array<User>,
  numberOfRuns: number,
  priority: (keyof typeof SolutionIdiom) = SolutionIdiom.LODASH,
): Result => {
  console.log('Priority', priority); 
  const jsTime = runFunctionNTimeAndGetAverageTime(jsFunction, users, numberOfRuns);
  const lodashTime = runFunctionNTimeAndGetAverageTime(lodashFunction, users, numberOfRuns);

  const winner = lodashTime < jsTime ? SolutionIdiom.LODASH : SolutionIdiom.JAVASCRIPT;

  return {
    name,
    jsTime,
    lodashTime,
    numberOfRuns,
    winner,
  };
};
