/**
http://www.geeksforgeeks.org/bubble-sort/
*/

const bubbleSort = a => {
  // always check the array once
  // stop when there are no swaps
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;

        swapped = true;
      }
    }
  }

  return a;
};

module.exports = bubbleSort;
