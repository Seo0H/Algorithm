interface MaxHeapImpl<T> {
  heap: T[];
  insert(value: T): void;
  removeRoot(idx: number): void;
}

class MaxHeap<T> implements MaxHeapImpl<T> {
  heap: T[];
  constructor() {
    this.heap = [];
  }

  insert(value: T) {
    switch (typeof value) {
      case "string":
        const splitStr = value.split("") as T[];
        this.heap.push(...splitStr);
        this.#heapMaxSort();
        break;

      default:
        this.heap.push(value);
        this.#heapMaxSort();
        break;
    }
  }

  removeRoot() {
    const count = this.heap.length;
    if (count < 0) return undefined;
    if (count === 1) return (this.heap = []);
    this.heap[0] = this.heap.pop() as T;
    this.#heapMaxSort();
  }

  #getLeftChildIndex = (parentIndex: number) => parentIndex * 2 + 1;
  #getRightChildIndex = (parentIndex: number) => parentIndex * 2 + 2;
  #getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2);

  #heapMaxSort = () => {
    for (
      let parentIdx = this.#getParentIndex(this.heap.length);
      parentIdx >= 0;
      parentIdx--
    )
      this.#sortGrandChilds(parentIdx);
  };

  #sortGrandChilds = (parentIdx: number) => {
    let leftChildIndex = this.#getLeftChildIndex(parentIdx);
    let rightChildIndex = this.#getRightChildIndex(parentIdx);

    if (!this.heap[leftChildIndex]) return;

    const biggerChildIndex =
      this.heap[rightChildIndex] > this.heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    if (this.heap[biggerChildIndex] > this.heap[parentIdx])
      this.#swap(parentIdx, biggerChildIndex);

    if (this.heap[this.#getLeftChildIndex(leftChildIndex)])
      this.#sortGrandChilds(leftChildIndex);

    if (this.heap[this.#getRightChildIndex(rightChildIndex)])
      this.#sortGrandChilds(rightChildIndex);
  };

  #swap = (parentIdx: number, childIdx: number) =>
    ([this.heap[parentIdx], this.heap[childIdx]] = [
      this.heap[childIdx],
      this.heap[parentIdx],
    ]);
}

export default MaxHeap;
