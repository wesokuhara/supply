/**
http://www.geeksforgeeks.org/bubble-sort/
*/

const bubbleSort = a => {
  // always check the array once
  // stop when there are no swaps
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;

        swapped = true;
      }
    }
  }

  return a;
};

module.exports = bubbleSort;
