const solver = require('./pyramidDescent');

test('a pyramid with 3 rows (sample input 1)', () => {
  expect(solver(2, [1,2,3,4,1,1])).toBe('LR');
});

test('a pyramid with 5 rows (sample input 2)', () => {
  expect(solver(720, [2,4,3,3,2,6,2,9,5,2,10,5,2,15,5])).toBe('LRLL');
});

test('a pyramid with 8 rows', () => {
  expect(solver(1, [1,2,1,3,2,1,4,3,2,1,5,4,3,2,1,6,5,4,3,2,1,7,6,5,4,3,2,1,8,7,6,5,4,3,2,1])).toBe('RRRRRRR');
});