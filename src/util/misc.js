const { find, propEq, uniq, pluck, sum } = require('ramda');

// Returns the first element of the list that matches, or undefined if no element matches.
var arr = [{ a: 1 }, { a: 2 }, { a: 3 }];
find(propEq('a', 2))(arr); //=> {a: 2}
find(propEq('a', 4))(arr); //=> undefined

// Returns a new list (set) containing only one copy of each element in the original list.
uniq([1, 1, 2, 1]); //=> [1, 2]
uniq([1, '1']); //=> [1, '1']
uniq([[42], [42]]); //=> [[42]]

// Returns a new list by plucking the same named property off all objects in the list supplied.
pluck('a')([{ a: 1 }, { a: 2 }]); //=> [1, 2]
pluck(0)([[1, 2], [3, 4]]); //=> [1, 3]
pluck('val', { a: { val: 3 }, b: { val: 5 } }); //=> {a: 3, b: 5}

// Sum values in a list
sum([1, 2, 3]); //=> 6
