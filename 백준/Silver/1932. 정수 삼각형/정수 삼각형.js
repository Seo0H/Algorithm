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
 * @param {number} N
 * @param {number[][]} input
 */
function solution(N, input) {
  const dp = Array.from({ length: N }, (_, idx) =>
    Array.from({ length: idx + 1 }, () => 0)
  );

  dp[0] = input[0];

  input.forEach((weights, y) => {
    if (y === 0) return;

    weights.forEach((weight, x) => {
      const leftParent = dp[y - 1][x];
      const rightParent = dp[y - 1][x - 1];
      const biggerParent = Math.max(leftParent ?? 0, rightParent ?? 0);

      dp[y][x] = biggerParent + weight;
    });
  });

  return Math.max(...dp.at(-1));
}
