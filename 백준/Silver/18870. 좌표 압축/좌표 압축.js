const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift().pop(), input.pop()));

/**
 * @param {number} N
 * @param {number[]} X
 */
function solution(N, X) {
  const hashX = [...new Set(X)]
    .sort((a, b) => a - b)
    .reduce((acc, cur, idx) => {
      acc.set(cur, idx);
      return acc;
    }, new Map());

  return X.reduce((acc, cur) => {
    acc.push(hashX.get(cur));
    return acc;
  }, []).join(" ");
}
