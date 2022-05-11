/* eslint-disable */

/**
 * This file is a "special case" as we're running it from root.
 * 
 * The imports are a bit odd and we are not running tests on it.
 */

import axios from 'axios';
import { writeFileSync } from 'fs';
import lodash from 'lodash';
import path from 'path';
import { User } from 'types';
import {fileURLToPath} from 'url';

const {
  map,
  random,
  size,
  union,
} = lodash;

console.log('Generating user data...');

const getPWD = () => {
  const __filename = fileURLToPath(__dirname);
  return path.dirname(__filename);
};

const getOutputPath = (filename: string) => path.join(
  getPWD(),
  '../../../data',
  filename
);

const generateUserData = (url: string) => async () => {
  const response = await axios.get(url);
  return response.data.data as unknown as Array<string>;
};

const finished = () => {
  console.log('done');
};

const generateMaleFirstNames = generateUserData(
  'https://www.randomlists.com/data/names-male.json'
);

const generateFemaleFirstNames = generateUserData(
  'https://www.randomlists.com/data/names-female.json'
);

const generateSurnames = generateUserData(
  'https://www.randomlists.com/data/names-surnames.json'
);

const getRandomSurname = (
  surnames: Array<string>
) => {
  const n = size(surnames);
  const i = random(0, n);
  return surnames[i];
};

interface GenerateFullNames {
  (surnames: Array<string>): (firstNames: Array<string>) => Array<User>
}

const generateFullNames: GenerateFullNames = (
  surnames
) => (
  firstNames
) => map(firstNames, firstName => ({
  firstName,
  lastName: getRandomSurname(surnames),
}));

const generateUserJSON = async () => {
  const fileName = 'users.json';
  const maleFirstNames = await generateMaleFirstNames();
  const femaleFirstNames = await generateFemaleFirstNames();

  const surnames = await generateSurnames();

  const generateNameWithSurname = generateFullNames(surnames);

  const maleNamedUsers = generateNameWithSurname(maleFirstNames);
  const femaleNamedUsers = generateNameWithSurname(femaleFirstNames);

  const users = union(maleNamedUsers, femaleNamedUsers);
  const outputPath = getOutputPath(fileName);
  writeFileSync(outputPath, JSON.stringify(users));
};

generateUserJSON().then(finished);
