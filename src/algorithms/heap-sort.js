/**
http://www.geeksforgeeks.org/heap-sort/
*/

const Heap = require('../data-structures/Heap');

const heapSort = a => {
  const minHeap = new Heap('min');

  // insert all values into the heap and poll off the heap
  for (let i = 0; i < a.length; i++) {
    minHeap.insert(a[i]);
  }

  let res = [];
  while (!minHeap.isEmpty()) {
    res.push(minHeap.poll());
  }

  return res;
};

module.exports = heapSort;
