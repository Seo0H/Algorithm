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

function solution(T, input) {
  const result = [];
  while (input.length) {
    const curArr = input.slice(0, 3);
    const N = curArr.shift();
    const dp = [
      [0, curArr[0][0]],
      [0, curArr[1][0]],
    ];

    for (let i = 2; i <= N; i++) {
      dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + curArr[0][i - 1];
      dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + curArr[1][i - 1];
    }

    input = input.slice(3);
    result.push(Math.max(dp[0][N], dp[1][N]));
  }

  return result.join("\n");
}