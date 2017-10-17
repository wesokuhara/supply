/**
http://www.geeksforgeeks.org/merge-sort/
*/

const mergeSort = a => {
  if (a.length < 2) return a;

  // recursively split the array and sort the halves
  let m = parseInt(a.length / 2);
  let l = a.slice(0, m);
  let r = a.slice(m, a.length);

  return merge(mergeSort(l), mergeSort(r));
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