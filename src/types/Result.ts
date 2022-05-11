import { SolutionIdiom } from './SolutionIdiom';

export interface Result {
  name: string,
  jsTime: number,
  lodashTime: number,
  numberOfRuns: number,
  winner: keyof typeof SolutionIdiom
}
