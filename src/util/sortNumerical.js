const { sort } = require('ramda');

const sortNumerical = sort((a, b) => a - b);

module.exports = sortNumerical;
