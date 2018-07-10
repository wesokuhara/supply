/**
 * http://www.geeksforgeeks.org/heap-sort/
 * Insert all values into the heap and poll off the heap to return the values in sorted order.
 */
const Heap = require('../data-structures/Heap');

const heapSort = arr => {
  const minHeap = new Heap();

  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
  }

  const res = [];
  while (!minHeap.isEmpty()) {
    res.push(minHeap.poll());
  }

  return res;
};

module.exports = heapSort;
