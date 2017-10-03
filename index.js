const { mergeAll } = require('ramda');
const algorithms = require('./src/algorithms');
const dataStructures = require('./src/data-structures');

module.exports = mergeAll([algorithms, dataStructures]);
