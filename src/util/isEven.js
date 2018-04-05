const { not, none, any, all } = require('ramda');

const isEven = n => n % 2 === 0;

const isNotEven = not(isEven);
const noneEven = none(isEven);
const anyEven = any(isEven);
const allEven = all(isEven);

module.exports = {
  isEven,
  isNotEven,
  noneEven,
  anyEven,
  allEven
};
