import { performance } from 'perf_hooks';

import { Example, ExampleFunction, User } from '../../types';
import { getElapsedTime } from '../math/getElapsedTime';

export interface Runner<T> {
  (lodashFunction: ExampleFunction<T>, jsFunction: ExampleFunction<T>): Example
}

export const runner: Runner<User> = (
  lodashFunction,
  jsFunction
) => (
  users
) => {
  const lodashStartTime = performance.now();
  lodashFunction(users);
  const lodashEndTime = performance.now();
  const lodashTime = getElapsedTime(lodashStartTime, lodashEndTime);

  const jsStartTime = performance.now();
  jsFunction(users);
  const jsEndTime = performance.now();
  const jsTime = getElapsedTime(jsStartTime, jsEndTime);

  return {
    jsTime,
    lodashTime,
  };
};
