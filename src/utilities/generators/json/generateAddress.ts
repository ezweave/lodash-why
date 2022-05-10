import { Address } from '../../../types';
import { City }  from 'country-state-city';
import { ICity } from 'country-state-city/dist/lib/interface';
import { flatMap, flow, map, random, size, union } from 'lodash';

const cities = City.getCitiesOfCountry('US') || [];

export const getRandomCity = flow(
  () => size(cities),
  n => random(0, n),
  index => cities[index],
  ({
    countryCode,
    name,
    stateCode,
  }: ICity)=> ({
   countryCode,
   name,
   stateCode 
  }),
);

export const getRandomStreetAddress = () => random(1, 9999);

export const StreetType = [
  'Ave',
  'Blvd',
  'Ln',
  'Rd',
  'St',
];

export const getRandomStreetType = flow(
  () => size(StreetType),
  n => random(0, n),
  i => StreetType[i],
);

const NumericStreetNames = map(
  Array(120),
  (_value, _key, i) => `${i} ${getRandomStreetType()}`
);

const NamedStreetNameRoots = [
  'Boulder',
  'Broadway',
  'Elder',
  'Kennedy',
  'Lincoln',
  'Main',
  'Martin Luther King',
  'Oak',
  'Peachtree',
  'Smith'
];

interface GenerateAllNamedStreetNamePermutations {
  (): Array<string>
}

export const generateAllNamedStreetNamePermutations: GenerateAllNamedStreetNamePermutations = flow(
  () => map(
    NamedStreetNameRoots,
    name => map(StreetType, streetType => `${name} ${streetType}`)
  ),
  flatMap,
);

const GeneratedStreetNames = union(
  NumericStreetNames, 
  generateAllNamedStreetNamePermutations()
);

export const getRandomGeneratedStreetName = flow(
  () => size(GeneratedStreetNames),
  n => random(0, n),
  i => GeneratedStreetNames[i], 
);

export const getRandomAddress = () => `${getRandomStreetAddress()} ${getRandomGeneratedStreetName()}`;

export const generateAddress = (): Address => {
  const {
    countryCode: country,
    stateCode: state,
    name: city,
  } = getRandomCity();

  return {
    city,
    country,
    state,
    street: getRandomAddress(),
  }
}
