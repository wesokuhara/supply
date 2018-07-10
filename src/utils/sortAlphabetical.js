const { sort } = require('ramda');

const sortAlphabetical = sort((a, b) => a.localeCompare(b));

module.exports = sortAlphabetical;
