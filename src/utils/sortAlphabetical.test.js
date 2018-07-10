const sortAlphabetical = require('./sortAlphabetical');

describe('sortAlphabetical()', () => {
  it('should sort an array of strings', () => {
    const l = ['a', 'b', 'c'];
    const expected = ['a', 'b', 'c'];

    const result = sortAlphabetical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of strings', () => {
    const l = ['b', 'b', 'b'];
    const expected = ['b', 'b', 'b'];

    const result = sortAlphabetical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of strings', () => {
    const l = ['z', 'y', 'x'];
    const expected = ['x', 'y', 'z'];

    const result = sortAlphabetical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of strings', () => {
    const l = ['foo', 'bar', 'baz'];
    const expected = ['bar', 'baz', 'foo'];

    const result = sortAlphabetical(l);
    expect(result).toEqual(expected);
  });

  it('should sort an array of strings', () => {
    const l = ['ABC', 'def', 'xYz'];
    const expected = ['ABC', 'def', 'xYz'];

    const result = sortAlphabetical(l);
    expect(result).toEqual(expected);
  });
});
