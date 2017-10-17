const { reduce, add } = require('ramda');

const sumList = l => {
  return reduce(add, 0, l);
};

module.exports = sumList;
