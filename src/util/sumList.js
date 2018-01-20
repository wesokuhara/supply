const { reduce, add } = require('ramda');

const sumList = reduce(add, 0);

module.exports = sumList;
