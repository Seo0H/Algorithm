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
 * @param {number} stepsNumber
 * @param {number[]} steps
 */
function solution(stepsNumber, steps) {
  const dp = [steps[0]];
  dp[1] = Math.max(steps[0] + steps[1], steps[1]);
  dp[2] = Math.max(steps[0] + steps[2], steps[1] + steps[2]);

  for (let i = 3; i <= stepsNumber; i++) {
    const prevPrevStepAndCurStep = dp[i - 2] + steps[i];
    const prevStepAndCurStep = steps[i - 1] + steps[i] + dp[i - 3];

    dp[i] = Math.max(prevPrevStepAndCurStep, prevStepAndCurStep);
  }

  return dp[stepsNumber - 1];
}
