const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();

console.log(solution(Number(input)));

function solution(N) {
  const dp = [1, 2, 3];

  for (let i = 3; i < N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[N - 1];
}
