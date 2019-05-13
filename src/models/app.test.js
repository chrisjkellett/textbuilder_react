import app from './app';

const textLength = 4;
const gaps = 2;

test('randomIndex() returns a number lower than textLength', () => {
  const result = app.randomIndex(textLength);
  expect(result).toBeLessThan(textLength);
}); 

test('indexArray() returns an array of indexes which are less than word length with no duplicates', () => {
  const result = app.indexArray(textLength, gaps);
  expect(result.length).toEqual(2);
  expect(result.filter(i => i > 5).length).toEqual(0);
});

test('process() returns a new text with n gaps', () => {
  const words = 'i am a text which needs gaps'.split(" ");
  const indexArray = [0, 1, 2];
  const result = app.process(indexArray, words);
  expect(result.filter(word => word === '{gap}').length).toEqual(indexArray.length);
});

test('build() returns a new text with n gaps', () => {
  const n = 3;
  const text = 'i am a text which needs gaps';
  const result = app.build(text, n);
  expect(result.filter(word => word === '{gap}').length).toEqual(n);
});

test('validate() throws an error if more gaps than text length', () => {
  expect(() => {
    app.build('i am a text with 7 words', 8);
  }).toThrow();
});
