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

/**
 * @param {number} N
 * @param {string[][]} input
 */
function solution(N, input) {
  const graph = input.reduce((acc, line) => {
    const [parent, ...children] = line;
    acc.set(parent, children);
    return acc;
  }, new Map());

  const traversal = [pre, in_, post];
  const root = input[0][0];

  return traversal
    .reduce((log, func) => {
      log.push(func(graph, root).join(""));
      return log;
    }, [])
    .join("\n");
}

/**
 * @param {Map<string,[string,string]>} graph
 * @param {string} node
 * @param {string[]} out
 */
function pre(graph, node, out = []) {
  out.push(node);
  const [left, right] = graph.get(node);
  if (left === "." && right === ".") return;
  left !== "." && pre(graph, left, out);
  right !== "." && pre(graph, right, out);

  return out;
}

function post(graph, node, out = []) {
  const [left, right] = graph.get(node);
  left !== "." && post(graph, left, out);
  right !== "." && post(graph, right, out);
  out.push(node);

  return out;
}
function in_(graph, node, out = []) {
  const [left, right] = graph.get(node);
  left !== "." && in_(graph, left, out);
  out.push(node);
  right !== "." && in_(graph, right, out);

  return out;
}
