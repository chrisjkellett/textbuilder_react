import app from './app';

const textLength = 4;
const gaps = 2;


describe('getRandomIndex()', () => {
  test('getRandomIndex() returns a number lower than textLength', () => {
    const result = app.getRandomIndex(textLength);
    expect(result).toBeLessThan(textLength);
  }); 
});

describe('getIndexArray()', () => {
  test('returns an array of indexes which are less than word length with no duplicates', () => {
    const result = app.getIndexArray(textLength, gaps);
    expect(result.length).toEqual(2);
    expect(result.filter(i => i > 5).length).toEqual(0);
  })
});

describe('processString()', () => {
  test('returns a new text with n gaps', () => {
    const words = 'i am a text which needs gaps'.split(" ");
    const indexArray = [0, 1, 2];
    const result = app.processString(indexArray, words);
    expect(result.filter(word => word === '{gap}').length).toEqual(indexArray.length);
  });
});

describe('build()', () => {
  test('returns a new text with n gaps', () => {
    const n = 3;
    const text = 'i am a text which needs gaps';
    const result = app.build(text, n);
    expect(result.filter(word => word === '{gap}').length).toEqual(n);
  });

  test('throws an error if more gaps than text length', () => {
    expect(() => {
      app.build('i am a text with 7 words', 8);
    }).toThrow();
  })
});
