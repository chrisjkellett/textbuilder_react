import validate from './validate';

test('hasNoSpaces() returns true unless a space is present', () => {
  expect(validate.hasNoSpaces('hello a')).toEqual(false);
})