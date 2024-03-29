const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(input[0], input[1]));

/**
 * @param {number} N
 * @param {number} K
 */
function solution(N, K) {
  const arr = Array.from({ length: N }, (_, idx) => idx + 1);
  const result = [];

  while (arr.length > 1) {
    for (let i = 0; i < K - 1; i++) {
      arr.push(arr.shift());
    }
    result.push(arr.shift());
  }
  return `<${[...result, arr.pop()].join(", ")}>`;
}
