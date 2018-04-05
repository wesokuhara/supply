const MIN = 'min';
const MAX = 'max';

function Heap(type = MIN) {
  this.array = [];
  this.type = type === MIN ? MIN : MAX;
}

Heap.prototype.insert = function(val) {
  if (val === undefined) return;
  this.array.push(val);
  this._bubbleUp(this._getLast());
};

Heap.prototype._bubbleUp = function(i) {
  if (i === 0) return;

  const parentIndex = this._getParent(i);

  if (
    (this.type === MIN && this.array[i] < this.array[parentIndex]) ||
    (this.type === MAX && this.array[i] > this.array[parentIndex])
  ) {
    this._swap(i, parentIndex);
    this._bubbleUp(parentIndex);
  }
};

Heap.prototype.poll = function() {
  if (this.size() === 0) return null;

  const top = this.array[0];
  this._swap(0, this._getLast());
  this.array.pop();
  this._trickleDown(0);
  return top;
};

Heap.prototype._trickleDown = function(i) {
  if (i === this._getLast()) return;

  let swapIndex = i;
  let swapVal = this.array[i];
  const leftIndex = this._getLeft(i);
  const rightIndex = this._getRight(i);

  if (leftIndex < this.size()) {
    let lval = this.array[leftIndex];
    if (
      (this.type === MIN && swapVal > lval) ||
      (this.type === MAX && swapVal < lval)
    ) {
      swapIndex = leftIndex;
      swapVal = lval;
    }
  }

  if (rightIndex < this.size()) {
    let rval = this.array[rightIndex];
    if (
      (this.type === MIN && swapVal > rval) ||
      (this.type === MAX && swapVal < rval)
    ) {
      swapIndex = rightIndex;
      swapVal = rval;
    }
  }

  if (swapIndex !== i) {
    this._swap(i, swapIndex);
    this._trickleDown(swapIndex);
  }
};

Heap.prototype._swap = function(i, j) {
  const temp = this.array[i];
  this.array[i] = this.array[j];
  this.array[j] = temp;
};

Heap.prototype._getParent = function(i) {
  return Math.floor((i - 1) / 2);
};

Heap.prototype._getLeft = function(i) {
  return i * 2 + 1;
};

Heap.prototype._getRight = function(i) {
  return i * 2 + 2;
};

Heap.prototype._getLast = function() {
  return this.array.length - 1;
};

Heap.prototype.peek = function() {
  if (this.size() === 0) return null;
  return this.array[0];
};

Heap.prototype.size = function() {
  return this.array.length;
};

Heap.prototype.isEmpty = function() {
  return this.size() === 0;
};

module.exports = Heap;
