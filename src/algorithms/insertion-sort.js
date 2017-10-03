/**
http://www.geeksforgeeks.org/insertion-sort/
*/

const insertionSort = a => {
  for (let i = 1; i < a.length; i++) {
    let cur = a[i];
    let j = i - 1;

    // move elements in the sorted part of the array, that are
    // greater than the key, to one position ahead
    while (j >= 0 && a[j] > cur) {
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = cur;
  }

  return a;
};

module.exports = insertionSort;
