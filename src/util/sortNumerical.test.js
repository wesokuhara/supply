const sortNumerical = require('./sortNumerical');

describe('sortNumerical()', () => {
  it('should sort an array of numbers', () => {
    const l = [1, 2, 3];
    const expected = [1, 2, 3];

    const result = sortNumerical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const l = [1, 10, 2, 21];
    const expected = [1, 2, 10, 21];

    const result = sortNumerical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const l = [-1, -2, -3];
    const expected = [-3, -2, -1];

    const result = sortNumerical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const l = [0, 1, 0, 0];
    const expected = [0, 0, 0, 1];

    const result = sortNumerical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of numbers', () => {
    const l = [1.0, 0.99, 0.2, -3.0];
    const expected = [-3.0, 0.2, 0.99, 1.0];

    const result = sortNumerical(l);
    expect(result).toEqual(expected);
  });
});
