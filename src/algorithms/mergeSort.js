/**
 * http://www.geeksforgeeks.org/merge-sort/
 * Recursively split the array in half and sort the halves.  Then merge the halves together in sorted order.
 */
const mergeSort = arr => {
  if (arr.length < 2) return arr;

  const m = parseInt(arr.length / 2);
  const left = arr.slice(0, m);
  const right = arr.slice(m, arr.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let arr = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) arr.push(left.shift());
    else arr.push(right.shift());
  }

  while (left.length > 0) arr.push(left.shift());
  while (right.length > 0) arr.push(right.shift());

  return arr;
};

module.exports = mergeSort;
