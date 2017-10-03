/**
http://www.geeksforgeeks.org/heap-sort/
*/

const Heap = require('../data-structures/Heap');

const heapsort = a => {
  const minHeap = new Heap('min');
  for (let i = 0; i < a.length; i++) {
    minHeap.insert(a[i]);
  }

  let res = [];
  while (!minHeap.isEmpty()) {
    res.push(minHeap.poll());
  }

  return res;
};

module.exports = heapsort;
