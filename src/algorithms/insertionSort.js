/**
 * http://www.geeksforgeeks.org/insertion-sort/
 * Maintain a sorted portion of the array, and insert the remaining elements into the correct position
 * in the sorted portion.
 */
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = cur;
  }

  return arr;
};

module.exports = insertionSort;
