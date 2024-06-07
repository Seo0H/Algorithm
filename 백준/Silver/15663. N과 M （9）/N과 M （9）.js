const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input.pop()));

/**
 * @param {[number, number]}
 * @param {number[]} numbers
 */
function solution([N, M], numbers) {
  numbers.sort((a, b) => a - b);

  return [
    ...permutation(
      numbers,
      M,
      Array.from({ length: N }, () => false)
    ),
  ].join("\n");
}

function permutation(
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
      permutation(
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
