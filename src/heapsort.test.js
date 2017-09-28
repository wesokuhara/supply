const heapsort = require('./heapsort');

describe('heapsort()', () => {
  it('should sort an array of numbers', () => {
    const nums = [1, 3, 2, 5, 4, 10];
    const expected = [1, 2, 3, 4, 5, 10];

    const result = heapsort(nums);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const nums = [-1, -1000, -9999, 0, 10];
    const expected = [-9999, -1000, -1, 0, 10];

    const result = heapsort(nums);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const nums = [2, 1, 0];
    const expected = [0, 1, 2];

    const result = heapsort(nums);
    expect(result).toEqual(expected);
  });
});
