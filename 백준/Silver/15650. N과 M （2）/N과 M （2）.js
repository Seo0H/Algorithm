const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(input));

function solution([N, M]) {
  const arr = Array.from({ length: N }, (_, idx) => idx + 1);
  const visited = Array.from({ length: N }, () => false);

  return [...comb(arr, M, visited)].join("\n");
}

function comb(arr, target, visited, depth = 0, finalResult = new Set()) {
  if (target === depth) {
    const thisResult = [];
    visited.forEach((visited, idx) => {
      if (visited) {
        thisResult.push(arr[idx]);
      }
    });
    finalResult.add(thisResult.join(" "));
    return;
  }

  for (let i = depth; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      comb(arr, target, visited, depth + 1, finalResult);
      visited[i] = false;
    }
  }

  return finalResult;
}
