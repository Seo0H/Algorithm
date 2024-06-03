const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input));

/**
 * @param {number[][]} inputs
 */
function solution([[N, M], NArray]) {
  const visited = Array.from({ length: N }, () => false);

  NArray.sort((a, b) => a - b);

  return [...comb(NArray, M, visited)].join("\n");
}

function comb(
  arr,
  target,
  visited,
  depth = 0,
  thisResult = [],
  finalResult = new Set()
) {
  if (target === depth) {
    finalResult.add(thisResult.join(" "));
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      comb(
        arr,
        target,
        visited,
        depth + 1,
        [...thisResult, arr[i]],
        finalResult
      );
      visited[i] = false;
    }
  }

  return finalResult;
}
