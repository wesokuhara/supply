/**
http://www.geeksforgeeks.org/bubble-sort/
*/

const bubblesort = a => {
  let swapped;
  for (let i = 0; i < a.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        swapped = true;
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }

    if (!swapped) break;
  }

  return a;
};

module.exports = bubblesort;
