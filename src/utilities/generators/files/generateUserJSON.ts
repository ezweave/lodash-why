import axios from 'axios';

console.log('Generating user data...');

const maleNameResponse = await axios.get(
  'https://www.randomlists.com/data/names-male.json'
);

console.warn(maleNameResponse);

export {};
