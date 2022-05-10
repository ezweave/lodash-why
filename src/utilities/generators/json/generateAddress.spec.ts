import { 
  generateAddress, 
  generateAllNamedStreetNamePermutations,
  getRandomCity, 
  getRandomGeneratedStreetName, 
  getRandomStreetAddress, 
  getRandomStreetType, 
  StreetType,
} from './generateAddress';

describe('getRandomCity', () => {
  it('gets two random cities', () => {
    const city1 = getRandomCity();
    const city2 = getRandomCity();
    expect(
      city1
    ).not.toEqual(city2);
  });
});

describe('getRandomStreetAddress', () => {
  it('gets a random street addres', () => {
    const streetAddress = getRandomStreetAddress();
    const inRange = streetAddress >= 1 && streetAddress <= 9999;
    expect(inRange).toEqual(true);
  });
});

describe('getRandomStreetType', () => {
  it('gets some random street type', () => {
    const streetType = getRandomStreetType();
    expect(
      StreetType.find(name => name === streetType)
    ).toBeTruthy();
  });
});

describe('generateAllNamedStreetNamePermutations', () => {
  it('generates the same list of random street names', () => {
    expect(
      generateAllNamedStreetNamePermutations()
    ).toMatchSnapshot();
  });
});

describe('getRandomGeneratedStreetName', () => {
  it('generates a random street name', () => {
    const streetName = getRandomGeneratedStreetName();
    expect(streetName).toBeTruthy();
  });
});

describe('generateAddress', () => {
  it('generates a realistic random address', () => {
    const address = generateAddress();
    expect(typeof address === 'object').toEqual(true);
  });
});
