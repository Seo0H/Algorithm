const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new ListNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  shiftHead() {
    const result = this.head;
    this.head = result.next;
    this.size -= 1;
    return result.data;
  }

  clear() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getHead() {
    return this.head?.data;
  }

  getSize() {
    return this.size;
  }
}

console.log(solution(Number(input)));

/**
 * @param {number} input
 * @returns
 */
function solution(input) {
  let cards = new LinkedList();

  Array.from({ length: input }, (_, idx) => cards.push(idx + 1));

  while (cards.getSize() > 1) {
    cards.shiftHead();
    cards.push(cards.shiftHead());
  }

  return cards.getHead();
}
