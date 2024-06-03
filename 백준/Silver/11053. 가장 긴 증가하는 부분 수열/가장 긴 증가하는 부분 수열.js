const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
console.log(solution(input.shift()[0], input.shift()));

/**
 * @param {number} N
 * @param {number[]} A
 */
function solution(N, A) {
  const dp = Array.from({ length: N }, () => 0);
  dp[0] = 1;

  for (let i = 1; i < A.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (A[i] > A[j] && dp[j] > max) {
        max = dp[j];
      }
    }

    dp[i] = max + 1;
  }

  return Math.max(...dp);
}
