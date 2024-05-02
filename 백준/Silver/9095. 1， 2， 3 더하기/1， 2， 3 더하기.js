const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input.shift()[0], input));

/**
 * @param {number} T
 * @param {number[]} numbers
 */
function solution(T, numbers) {
  const memo = Array.from({ length: 11 });
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  for (let i = 4; i < 11; i++) {
    memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
  }

  return numbers.map((num) => memo[num]).join("\n");
}
