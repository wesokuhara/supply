/**
 * http://www.geeksforgeeks.org/bubble-sort/
 * Traverse the array at least once.  If elements were swapped at least one, repeat.  Else the array is sorted.
 */
const bubbleSort = arr => {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  }

  return arr;
};

module.exports = bubbleSort;
