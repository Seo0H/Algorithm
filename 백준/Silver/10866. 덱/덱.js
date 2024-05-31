const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

console.log(solution(input.shift(), input));

function solution(N, orders) {
  const orderAction = OrderAction();

  orders.forEach(([order, number]) => {
    orderAction[order](Number(number));
  });

  return orderAction.getLog().join("\n");
}

function OrderAction(log = []) {
  const deque = [];

  return {
    push_front(x) {
      deque.unshift(x);
    },
    push_back(x) {
      deque.push(x);
    },
    pop_front() {
      log.push(deque.shift() ?? -1);
    },
    pop_back() {
      log.push(deque.pop() ?? -1);
    },
    size() {
      log.push(deque.length);
    },
    empty() {
      log.push(deque.length === 0 ? 1 : 0);
    },
    front() {
      log.push(deque[0] ?? -1);
    },
    back() {
      log.push(deque.at(-1) ?? -1);
    },
    getLog() {
      return log;
    },
  };
}
