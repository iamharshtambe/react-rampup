import { sum } from '../utils/sum.js';

test('This calculates the sum of two numbers', () => {
  const result = sum(24, 15);

  expect(result).toBe(39);
});
