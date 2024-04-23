const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input.shift(), input));

/**
 * @param {number} T
 * @param {number[]} N
 * @returns
 */
function solution(T, N) {
  const dp = [];
  const result = N.map((num) => {
    getFibonacci(num);
    return dp[num].join(" ");
  });

  return result.join("\n");

  /**
   * @param {number} num
   * @param {[number, number]} result
   */
  function getFibonacci(num) {
    if (dp[num]) return dp[num];

    if (num === 0) {
      dp[num] = [1, 0];
    } else if (num === 1) {
      dp[num] = [0, 1];
    } else {
      if (!dp[num - 1]) {
        getFibonacci(num - 1);
      }

      if (!dp[num - 2]) {
        getFibonacci(num - 2);
      }

      dp[num] = [
        dp[num - 1][0] + dp[num - 2][0],
        dp[num - 1][1] + dp[num - 2][1],
      ];
    }

    return dp[num];
  }
}
