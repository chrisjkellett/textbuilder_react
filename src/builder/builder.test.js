import app from './builder';

const textLength = 4;
const gaps = 2;

test('calculateGaps() returns n gaps depending on level', () => {
  expect(app.calculateGaps(10)).toBe(app.easy * 10)
  expect(app.calculateGaps(10, 'easy')).toBe(app.easy * 10);
  expect(app.calculateGaps(10, 'intermediate')).toBe(app.intermediate * 10);
  expect(app.calculateGaps(10, 'hard')).toBe(app.hard * 10);
})

test('check() returns word when not a key of userAnswers', () => {
  const result = app.check({}, ['theAnswer']);
  expect(result).toEqual(['theAnswer']);
});

test('check() returns word prefixed with # when in userAnswers and matches text[i]', () => {
  const result = app.check({0: 'theAnswer'}, ['theAnswer']);
  expect(result).toEqual(['#theAnswer']);
});

test('check() returns word prefixed with ! when in userAnswers and does NOT match text[i]', () => {
  const result = app.check({0: 'theAnswers'}, ['theAnswer']);
  expect(result).toEqual(['!theAnswer']);
});

test('check() returns [not answered] when in userAnswers and is empty string', () => {
  const result = app.check({0: ''}, ['theAnswer']);
  expect(result).toEqual(['[not answered]']);
});

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
  const words = 'i am a text which needs some gaps'.split(" ");
  const indexArray = [0, 1, 2];
  const result = app.process(indexArray, words);
  expect(result.filter(word => word === '{gap}').length).toEqual(indexArray.length);
});

test('build() returns a new text n gaps depending on level', () => {
  const text = 'i am a text which with 2 gaps on easy';
  const resultWhenEasy = app.build(text, 'easy');
  expect(resultWhenEasy.filter(word => word === '{gap}').length).toEqual(2);
});
