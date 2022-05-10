import { flow, random } from "lodash";
import { map as mapFP } from 'lodash/fp';

interface GenerateFloatingPointArrayN {
  (n: number): Array<number>
}

export const generateFloatingPointArrayN: GenerateFloatingPointArrayN = flow(
  Array,
  mapFP(_n => random(0, 1000, true)),
);