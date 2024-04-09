const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.shift();

console.log(solution(input.pop()));

/**
 * @param {number[]} input
 * @returns
 */
function solution(input) {
  return input
    .sort((a, b) => a - b)
    .reduce((acc, cur) => {
      acc.push((acc.at(-1) ?? 0) + cur);
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur, 0);
}
