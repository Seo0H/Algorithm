function MaxHeapFunc(heap: any[]) {
  const length = heap.length;
  if (length <= 1) return;

  for (let i = getParentIndex(length); i >= 0; i--) sortGrandChilds(i);
  return heap;

  function sortGrandChilds(parentIdx: number) {
    let leftChildIndex = getLeftChildIndex(parentIdx);
    let rightChildIndex = getRightChildIndex(parentIdx);

    if (!heap[leftChildIndex]) return;

    const biggerChildIndex =
      heap[rightChildIndex] > heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;

    if (heap[biggerChildIndex] > heap[parentIdx])
      swap(parentIdx, biggerChildIndex);

    if (heap[getLeftChildIndex(leftChildIndex)])
      sortGrandChilds(leftChildIndex);

    if (heap[getRightChildIndex(rightChildIndex)])
      sortGrandChilds(rightChildIndex);
  }

  function swap(parentIdx: number, childIdx: number) {
    [heap[parentIdx], heap[childIdx]] = [heap[childIdx], heap[parentIdx]];
  }

  function getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1;
  }
  function getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2;
  }
  function getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }
}

export default MaxHeapFunc;
