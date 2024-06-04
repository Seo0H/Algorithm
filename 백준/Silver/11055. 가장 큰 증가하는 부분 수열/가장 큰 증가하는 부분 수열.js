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
 * @param {number} N - 배열 A의 길이
 * @param {number[]} A - 수열
 * @returns {number} - 가장 큰 증가 부분 수열의 합
 */
function solution(N, A) {
  const dp = [...A];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      const isIncreasing = A[i] > A[j];
      const isSumGreater = dp[i] < dp[j] + A[i];

      if (isIncreasing && isSumGreater) {
        dp[i] = A[i] + dp[j];
      }
    }
  }

  return Math.max(...dp);
}
