const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input));

/**
 * @param {[number,number]}
 * @param {number[][]} input
 */
function solution([N, M], input) {
  if (M === 0) return N;

  const graph = input.reduce(
    (log, [start, end], idx) => {
      log[start].push(end);
      log[end].push(start);

      return log;
    },
    Array.from({ length: N + 1 }, () => [])
  );

  let unConnectedNodes = graph.filter((el) => !el.length).length - 1;
  let count = 0;

  for (let i = 1; i <= graph.length; i++) {
    if (graph[i] && graph[i].length) {
      count += 1;
      dfs(i, graph);
    }
  }

  return count + unConnectedNodes;
}

/**
 * @param {number} idx
 * @param {number[][]} graphArray
 * @returns
 */
function dfs(idx, graphArray) {
  const q = graphArray[idx];
  graphArray[idx] = [];

  while (q.length) {
    const curIdx = q.pop();
    if (graphArray[curIdx].length) {
      q.push(...graphArray[curIdx]);
      graphArray[curIdx] = [];
    }
  }
}
