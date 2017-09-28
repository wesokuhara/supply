const Heap = require('./src/heap');

let myHeap = new Heap('max');

myHeap.insert(1);
myHeap.insert(10);
myHeap.insert(9);
myHeap.insert(12);
myHeap.insert(19);
myHeap.insert(7);
myHeap.insert(10);
console.log(myHeap);

console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
console.log(myHeap.poll());
console.log(myHeap);
