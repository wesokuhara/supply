const sumList = require('./sumList');

describe('sumList()', () => {
  it('should sort an array of numbers', () => {
    const l = [1, 2, 3, 4];

    const result = sumList(l);
    expect(result).toBe(10);
  });

  it('should sort an array of numbers', () => {
    const l = [-1, -1000, -9999];

    const result = sumList(l);
    expect(result).toBe(-11000);
  });

  it('should sort an array of numbers', () => {
    const l = [];

    const result = sumList(l);
    expect(result).toBe(0);
  });
});
