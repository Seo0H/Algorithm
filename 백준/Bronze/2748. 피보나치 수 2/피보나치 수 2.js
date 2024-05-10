const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();

console.log(solution(Number(input)));

/**
 * @param {number} N
 */
function solution(N) {
  const dp = [0n, 1n, 1n];

  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return String(dp[N]);
}
