import { flow, last, map, partialRight } from 'lodash';
import { countBy as countByFP, sortBy as sortByFP } from 'lodash/fp';

import { ExampleFunction, User } from '../../types';
import { runner } from '../../utilities';

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
  last,
  // TS annoyance
  mostPopularLastName => mostPopularLastName as unknown as MostPopularName
);

const findMatchingCount = ({lastName}: User) => 
  ({name}: MostPopularName) => lastName === name;

const buildCounts = (counts: Array<MostPopularName>, user: User) => {
  const matchingCount = counts.find(otherUser => findMatchingCount(user)(otherUser));

  if(matchingCount) {
    // Mutating call, not FP 
    Object.assign(matchingCount, { count: matchingCount.count + 1});
    return counts;
  } else {
    return [
      ...counts, 
      {
        count: 1,
        name: user.lastName,
      },
    ];
  }
};

export const findMostPopularLastNameWithJS: ExampleFunction<MostPopularName> = (
  users
) => {
  const counts = users.reduce(buildCounts, []);
  // Mutating call, not FP.  TS needed some "assurance".
  let highestCount: MostPopularName = undefined as unknown as MostPopularName;

  counts.forEach((entry) => {
    if(highestCount === undefined) {
      highestCount = entry;
    } else if(entry.count > highestCount.count) {
      highestCount = entry;
    }
  });

  return highestCount;
};

export const findMostPopularLastName = runner<MostPopularName>('findMostPopularLastName', findMostPopularLastNameWithLodash, findMostPopularLastNameWithJS);
