class MinHeap {
  heap = [];

  constructor() {}

  pop() {
    if (!this.size()) return null;
    if (this.size() === 1) return this.heap.pop();

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return result;
  }

  insert(newVal) {
    this.heap.push(newVal);
    this._bubbleUp();
  }

  size = () => this.heap.length;

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

  _swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  _bubbleUp() {
    let childIdx = this.size() - 1;
    let parentIdx = this._getParentIdx(childIdx);

    while (this.heap[childIdx] < this.heap[parentIdx]) {
      this._swap(childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = this._getParentIdx(parentIdx);
    }
  }

  _bubbleDown() {
    let parentIdx = 0;
    let leftChildIdx = this._getLeftChildIdx(parentIdx);
    let rightChildIdx = this._getRightChildIdx(parentIdx);

    const isLeftChild = leftChildIdx <= this.size() - 1;
    const isRightChild = rightChildIdx <= this.size() - 1;

    // 일단 왼쪽 오른쪽 자식 둘 중 하나라도 작다면 while문을 실행한다.
    while (
      (isLeftChild && this.heap[leftChildIdx] < this.heap[parentIdx]) ||
      (isRightChild && this.heap[rightChildIdx] < this.heap[parentIdx])
    ) {
      // 오른쪽 자식노드가 왼쪽 자식노드보다 작은 경우 -> 부모, 자식들 중 가장 작은 노드를 부모와 바꾼다.
      if (isRightChild && this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
        this._swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      } else {
        // 만약 자식들 중 오른쪽 노드가 더 크다면 왼쪽 노드가 더 작은 것이기 때문에 왼쪽 노드를 부모 노드와 바꾼다.
        this._swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      }

      leftChildIdx = this._getLeftChildIdx(parentIdx);
      rightChildIdx = this._getRightChildIdx(parentIdx);
    }
  }
}

const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input.shift(), input));

/**
 * @param {number} N
 * @param {number[]} input
 */
function solution(n, input) {
  const minHeap = new MinHeap();

  const result = input.reduce((logs, cur) => {
    if (cur === 0) {
      const minHeapVal = minHeap.pop() ?? 0;
      logs.push(minHeapVal);
    } else {
      minHeap.insert(cur);
    }

    return logs;
  }, []);

  return result.join("\n");
}
