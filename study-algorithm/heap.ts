interface HeapImpl {
  heap: { key: number; value: any }[];
  insert(key: number, value: number): void;
  remove(): void;
}

interface PriorityQeueImpl extends Heap {
  enqueue(priority: number, value: any): void;
  dequeue(): void;
  isEmpty(): boolean;
}
export class Heap implements HeapImpl {
  heap: { key: number; value: number }[];
  constructor() {
    // 힙을 저장할 배열
    this.heap = [];
  }
  #getLeftChildIndex = (parentIndex: number) => parentIndex * 2 + 1;
  #getRightChildIndex = (parentIndex: number) => parentIndex * 2 + 2;
  #getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2);
  peek = () => this.heap[0]; // 항상 최상위 노드가 peek 됨.

  insert = (key: number, value: number = key) => {
    // 1. 배열에 끝에 넣는다
    // 2. Min Heap 의 형태를 갖추도록 조절 -> 최근에 삽입한 노드가 제 자리를 찾아갈 수 있도록 끌어올리기
    // 우선순위를 비교하기 위해서 key, value 로 받는다.
    const node: { key: number; value: number } = { key, value }; // 객체로 node 를 만들고
    this.heap.push(node); // push 한다.
    this.#heapifyUp(); // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count < 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop() as { key: number; value: number };
      this.#heapifDown();
    }
  };

  #heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInserteNode = this.heap[index];
    while (index > 0) {
      const parentIndex = this.#getParentIndex(index);
      // 부모 노드의 key 값이 마지막에 삽입된 노드의 키 값보다 크면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInserteNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }
    // break를 만나 제 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리
    this.heap[index] = lastInserteNode;
  };

  #heapifDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[0];

    while (this.#getLeftChildIndex(index) < count) {
      const leftChildIndex = this.#getLeftChildIndex(index);
      const rightChildIndex = this.#getRightChildIndex(index);

      // 왼쪽 오른쪽 중 더 작은 노드를 찾는다
      // rightChild가 있다면 key값을 비교해 더 작은 값을 찾는다
      // 없다면 leftChild가 더 작은 값을 가지는 인덱스가 된다
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex;
      // 자식 노드의 키 값이 루트노드보다 작다면 위로 끌어올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }
    this.heap[index] = rootNode;
  };
}

export class PriorityQeue extends Heap implements PriorityQeueImpl {
  constructor() {
    super();
  }
  enqueue = (priority: number, value: any = priority) =>
    this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}
