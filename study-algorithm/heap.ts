class MinHeap {
  heap: { key: number; value: number }[];
  constructor() {
    // 힙을 저장할 배열
    this.heap = [];
  }

  #getLeftChildIndex = (parentIndex: number) => parentIndex * 2 + 1;
  #getRightChildIndex = (parentIndex: number) => parentIndex * 2 + 2;
  #getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2);
  #peek = () => this.heap[0]; // 항상 최상위 노드가 peek 됨.

  insert = (key: number, value: number) => {
    // 1. 배열에 끝에 넣는다
    // 2. Min Heap 의 형태를 갖추도록 조절 -> 최근에 삽입한 노드가 제 자리를 찾아갈 수 있도록 끌어올리기
    // 우선순위를 비교하기 위해서 key, value 로 받는다.
    const node: { key: number; value: number } = { key, value }; // 객체로 node 를 만들고
    this.heap.push(node); // push 한다.
    this.heapifyUp(); // 배열에 가장 끝에 넣고, 다시 min heap 의 형태를 갖추도록 한다.
  };

  heapifyUp = () => {
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
}

const myHeap = new MinHeap();
myHeap.insert(0, 0);
console.log(myHeap.heap);
myHeap.insert(5, 5);
myHeap.insert(1, 1);
myHeap.insert(7, 7);
myHeap.insert(10, 10);
myHeap.insert(3, 3);
console.log(myHeap.heap);
