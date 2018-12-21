const Heap = require('./Heap');

describe('Heap', () => {
  describe('add()', () => {
    it('should add an item', () => {
      const heap = new Heap();
      heap.add(3);
      expect(heap.size()).toBe(1);
      expect(heap.peek()).toBe(3);
    });
  });

  describe('poll()', () => {
    it('should remove the minimum item', () => {
      const heap = new Heap('min');
      heap.add(3);
      heap.add(6);
      heap.add(9);
      heap.add(0);
      expect(heap.size()).toBe(4);
      expect(heap.poll()).toBe(0);
      expect(heap.size()).toBe(3);
    });

    it('should remove the maximum item', () => {
      const heap = new Heap('max');
      heap.add(3);
      heap.add(6);
      heap.add(9);
      heap.add(0);
      expect(heap.size()).toBe(4);
      expect(heap.poll()).toBe(9);
      expect(heap.size()).toBe(3);
    });
  });

  describe('peek()', () => {
    it('should return the minimum item', () => {
      const heap = new Heap('min');
      heap.add(3);
      heap.add(6);
      heap.add(9);
      heap.add(0);
      expect(heap.peek()).toBe(0);
    });

    it('should return the maximum item', () => {
      const heap = new Heap('max');
      heap.add(3);
      heap.add(6);
      heap.add(9);
      heap.add(0);
      expect(heap.peek()).toBe(9);
    });
  });

  describe('size()', () => {
    it('should return the size', () => {
      const heap = new Heap();
      heap.add(3);
      expect(heap.size()).toBe(1);
      heap.add(3);
      expect(heap.size()).toBe(2);
    });
  });

  describe('isEmpty()', () => {
    it('should return if the heap is empty', () => {
      const heap = new Heap();
      expect(heap.isEmpty()).toBe(true);
      heap.add(3);
      expect(heap.isEmpty()).toBe(false);
      heap.poll();
      expect(heap.isEmpty()).toBe(true);
    });
  });
});
