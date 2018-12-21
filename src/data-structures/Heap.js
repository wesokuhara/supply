const MIN = "min";
const MAX = "max";

function getParentIndex(i) {
  return Math.floor((i - 1) / 2);
}

function getLeftIndex(i) {
  return i * 2 + 1;
}

function getRightIndex(i) {
  return i * 2 + 2;
}

class Heap {
  constructor(type = MIN) {
    this.array = [];
    this.type = type === MIN ? MIN : MAX;
  }

  add(val) {
    if (isNaN(val)) return;
    this.array.push(val);
    this._bubbleUp(this._getLastIndex());
  }

  poll() {
    if (this.array.length === 0) return null;

    const top = this.array[0];
    this._swap(0, this._getLastIndex());
    this.array.pop();
    this._trickleDown(0);
    return top;
  }

  peek() {
    if (this.array.length === 0) return null;
    return this.array[0];
  }

  size() {
    return this.array.length;
  }

  isEmpty() {
    return this.array.length === 0;
  }

  // PRIVATE METHODS

  _bubbleUp(i) {
    if (i === 0) return;

    const parentIndex = getParentIndex(i);

    if (
      (this.type === MIN && this.array[i] < this.array[parentIndex]) ||
      (this.type === MAX && this.array[i] > this.array[parentIndex])
    ) {
      this._swap(i, parentIndex);
      this._bubbleUp(parentIndex);
    }
  }

  _trickleDown(i) {
    if (i === this._getLastIndex()) return;

    let swapIndex = i;
    let swapVal = this.array[i];
    const leftIndex = getLeftIndex(i);
    const rightIndex = getRightIndex(i);
    const size = this.array.length;

    if (leftIndex < size) {
      let lval = this.array[leftIndex];
      if (
        (this.type === MIN && swapVal > lval) ||
        (this.type === MAX && swapVal < lval)
      ) {
        swapIndex = leftIndex;
        swapVal = lval;
      }
    }

    if (rightIndex < size) {
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
  }

  _swap(i, j) {
    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  }

  _getLastIndex() {
    return this.array.length - 1;
  }
}

module.exports = Heap;
