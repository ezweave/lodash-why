import { get } from 'lodash';

export enum ArgTypes {
    generateGraph = 'generateGraph',
    numberOfRuns = 'numberOfRuns',
    randomizeExecution = 'randomizeExecution',
}

export interface Args {
  generateGraph: boolean,
  numberOfRuns: number,
  randomizeExecution: boolean,
}

export interface ParseArgs {
// eslint-disable-next-line @typescript-eslint/no-explicit-any 
    (args: any): Args
}

export const parseArgs: ParseArgs = (
  args 
) => ({
    generateGraph: get(args, ArgTypes.generateGraph),
    numberOfRuns: get(args, ArgTypes.numberOfRuns),
    randomizeExecution: get(args, ArgTypes.randomizeExecution),
});
