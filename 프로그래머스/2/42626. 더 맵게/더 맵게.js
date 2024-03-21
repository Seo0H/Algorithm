class NumberMinHeap {
  /**
   * @param {number[]} val
   */
  constructor(val) {
    this.heap = [];
    val.forEach((el) => this.insert(el));
    // this._bubbleDown();
  }

  size = () => this.heap.length;

  pop() {
    if (!this.size()) return null;
    if (this.size() === 1) return this.heap.pop();

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();

    return result;
  }

  peek() {
    return this.heap[0];
  }

  /**
   * @param {number} newVal
   */
  insert(newVal) {
    this.heap.push(newVal);
    this._bubbleUp();
  }

  _getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);
  _getRightChildIdx(parentIdx) {
    const rightChildIdx = parentIdx * 2 + 2;
    if (rightChildIdx > this.size() - 1) return undefined;
    return rightChildIdx;
  }
  _getLeftChildIdx(parentIdx) {
    const leftChildIdx = parentIdx * 2 + 1;
    if (leftChildIdx > this.size() - 1) return undefined;
    return leftChildIdx;
  }

  _bubbleDown() {
    let parentIdx = 0;
    let leftChildIdx = this._getLeftChildIdx(parentIdx);
    let rightChildIdx = this._getRightChildIdx(parentIdx);

    // 왼쪽과 오른쪽 자식 노드 둘 중 하나라도 부모 노드보다 작을 경우 while 문을 반복한다.
    const isLeftChild = leftChildIdx <= this.size() - 1;
    const isRightChild = rightChildIdx <= this.size() - 1;

    while (
      (isLeftChild && this.heap[leftChildIdx] < this.heap[parentIdx]) ||
      (isRightChild && this.heap[rightChildIdx] < this.heap[parentIdx])
    ) {
      // 오른쪽 자식노드가 왼쪽 자식노드보다 작은 경우
      if (isRightChild && this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
        this._swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      } else {
        this._swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      }

      leftChildIdx = this._getLeftChildIdx(parentIdx);
      rightChildIdx = this._getRightChildIdx(parentIdx);
    }
  }

  //아래에서부터 위로 정렬
  _bubbleUp() {
    let childIdx = this.size() - 1;
    let parentIdx = this._getParentIdx(childIdx);

    while (this.heap[childIdx] < this.heap[parentIdx]) {
      this._swap(childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = this._getParentIdx(parentIdx);
    }
  }

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
}

function solution(scoville, K) {
  const scovilleMinHeap = new NumberMinHeap(scoville);
  let answer = 0;
    
  if (scovilleMinHeap.peek() >= K) return answer;

  while (scovilleMinHeap.peek() < K && scovilleMinHeap.size() > 1) {
    answer += 1;
    scovilleMinHeap.insert(scovilleMinHeap.pop() + scovilleMinHeap.pop() * 2);
  }

  return scovilleMinHeap.peek() >= K ? answer : -1;
}