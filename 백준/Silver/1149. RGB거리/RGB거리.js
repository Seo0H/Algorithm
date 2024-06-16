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
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: 3 }, () => 0)
  );
  const [RED, GREEN, BLUE] = [0, 1, 2];
  dp[0] = [...input[0]];

  input.forEach((houseCost, idx) => {
    if (idx === 0) return;

    dp[idx][RED] =
      Math.min(dp[idx - 1][GREEN], dp[idx - 1][BLUE]) + houseCost[RED];
    dp[idx][GREEN] =
      Math.min(dp[idx - 1][RED], dp[idx - 1][BLUE]) + houseCost[GREEN];
    dp[idx][BLUE] =
      Math.min(dp[idx - 1][RED], dp[idx - 1][GREEN]) + houseCost[BLUE];
  });

  return Math.min(...dp[N - 1]);
}
