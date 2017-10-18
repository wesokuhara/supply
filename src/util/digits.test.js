const digits = require('./digits');

describe('digits()', () => {
  it('should return a list of digits', () => {
    const l = 10;

    const result = digits(l);
    expect(result).toEqual([1, 0]);
  });

  it('should return a list of digits', () => {
    const l = -9999;

    const result = digits(l);
    expect(result).toEqual([9, 9, 9, 9]);
  });

  it('should return a list of digits', () => {
    const l = 8.08;

    const result = digits(l);
    expect(result).toEqual([8]);
  });

  it('should return a list of digits', () => {
    const l = 0;

    const result = digits(l);
    expect(result).toEqual([0]);
  });
});
