import { SolutionIdiom } from './SolutionIdiom';

export interface Result {
  entrySetSize: number,
  jsTime: number,
  lodashTime: number,
  name: string,
  numberOfRuns: number,
  winner: keyof typeof SolutionIdiom
}
