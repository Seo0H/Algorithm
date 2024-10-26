const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(...input));

function solution([N, M], Narr) {
  Narr.sort((a, b) => a - b);
  return [...dfs(Narr, M)].join("\n");
}

function dfs(
  arr,
  targetDepth,
  idx = 0,
  tmpResult = [],
  finalResult = new Set()
) {
  if (tmpResult.length === targetDepth) {
    finalResult.add(tmpResult.join(" "));
    return;
  }

  for (let i = idx; i < arr.length; i++) {
    dfs(arr, targetDepth, i, [...tmpResult, arr[i]], finalResult);
  }

  return finalResult;
}
