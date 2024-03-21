function solution(scoville, K) {
  let answer = 0;
  const minHeap = new MinHeap();

  // minHeap.set(scoville);
    scoville.forEach(el => minHeap.push(el));

  if (minHeap.peek() >= K) return answer;

  while (minHeap.peek() < K && minHeap.size() > 1) {
    answer++;
    const mixed = minHeap.pop() + minHeap.pop() * 2;
    minHeap.push(mixed);
  }

  return minHeap.peek() >= K ? answer : -1;
}

function MinHeap() {
  let heap = [];
  const swap = (idx1, idx2) =>
    ([heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]]);
  const getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);
  const getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  const getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;

  return {
    size() {
      return heap.length;
    },
    peek() {
      return heap[0];
    },
    pop() {
      if (!this.size()) return null;
      if (this.size() === 1) return heap.pop();
      const value = this.peek();
      heap[0] = heap.pop();
      this.bubbleDown();
      return value;
    },
    push(value) {
      heap.push(value);
      this.bubbleUp();
    },
    bubbleUp() {
      let childIdx = this.size() - 1;
      let parentIdx = getParentIdx(childIdx);

      while (heap[childIdx] < heap[parentIdx]) {
        swap(childIdx, parentIdx);
        childIdx = parentIdx;
        parentIdx = getParentIdx(parentIdx);
      }
    },
    bubbleDown() {
      let parent = 0;
      let leftChildIdx = getLeftChildIdx(parent);
      let rightChildIdx = getRightChildIdx(parent);

      // 왼쪽과 오른쪽 자식 노드 둘 중 하나라도 부모 노드보다 작을 경우 while 문을 반복한다.
      const isLeftChild = leftChildIdx <= this.size() - 1;
      const isRightChild = rightChildIdx <= this.size() - 1;

      while (
        (isLeftChild && heap[leftChildIdx] < heap[parent]) ||
        (isRightChild && heap[rightChildIdx] < heap[parent])
      ) {
        // 오른쪽 자식노드가 왼쪽 자식노드보다 작은 경우
        if (isRightChild && heap[leftChildIdx] > heap[rightChildIdx]) {
          swap(parent, rightChildIdx);
          parent = rightChildIdx;
        } else {
          swap(parent, leftChildIdx);
          parent = leftChildIdx;
        }

        leftChildIdx = getLeftChildIdx(parent);
        rightChildIdx = getRightChildIdx(parent);
      }
    },
  };
}