const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input));

/**
 * @param {Number[]} input
 */
function solution([n, ...input]) {
  input.sort((a, b) => a - b);

  return input.reduce((acc, cur, idx) => {
    if (idx + 1 === cur) return acc;

    acc += Math.abs(cur - (idx + 1));
    return acc;
  }, 0);
}
