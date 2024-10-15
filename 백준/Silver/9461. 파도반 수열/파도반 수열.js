const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const [count, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(count, inputs));

function solution(count, inputs) {
  const max = Math.max(...inputs);
  const dp = Array.from({ length: max + 1 });

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= max; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  return inputs.map((el) => dp[el - 1]).join("\n");
}
