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
    orderAction[order](number);
  });

  return orderAction.getLog().join("\n");
}

function OrderAction(log = []) {
  const stack = [];

  return {
    push(x) {
      stack.push(Number(x));
    },
    pop() {
      const result = stack.pop();
      log.push(result ?? -1);
      return result;
    },
    top() {
      log.push(stack.at(-1) ?? -1);
    },
    size() {
      log.push(stack.length);
    },
    empty() {
      log.push(stack.length === 0 ? 1 : 0);
    },
    getLog() {
      return log;
    },
    getStack() {
      return stack;
    },
  };
}
