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
 * @param {[number,number]}
 * @param {number[][]} input
 */
function solution([N, target], input) {
  function dfs(idx = 0, sum = 0, depth = 0, result = []) {
    if (depth === 3) {
      if (sum <= target) result.push(sum);
      return;
    }

    for (let i = idx; i < input.length; i++) {
      dfs(i + 1, sum + input[i], depth + 1, result);
    }

    return result;
  }

  return dfs().sort((a, b) => b - a)[0];
}
