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
  const q = [];

  return {
    push(x) {
      q.push(x);
    },
    pop() {
      log.push(q.shift() ?? -1);
    },
    top() {
      log.push(q.at(-1) ?? -1);
    },
    size() {
      log.push(q.length);
    },
    empty() {
      log.push(q.length === 0 ? 1 : 0);
    },
    front() {
      log.push(q[0] ?? -1);
    },
    back() {
      log.push(q.at(-1) ?? -1);
    },
    getLog() {
      return log;
    },
  };
}
