import { flow, last, map, partialRight } from 'lodash';
import { countBy as countByFP, sortBy as sortByFP } from 'lodash/fp';

import { ExampleFunction } from '../../types';

interface MostPopularName {
  count: number,
  name: string,
}

export const findMostPopularLastNameWithLodash: ExampleFunction<MostPopularName> = flow(
  countByFP('lastName'),
  // Note: mapFP does not return the key due to the "cap" rule in lodash/fp
  partialRight(map, (value: number, key: string) => ({
    count: value,
    name: key,
  })),
  sortByFP<MostPopularName>(['count']),
  last
);
