const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift().pop(), input));

/**
 * @param {number} N
 * @param {[number, number]} coordinates
 */
function solution(N, coordinates) {
  return coordinates
    .sort(([ax, ay], [bx, by]) => (ax - bx ? ax - bx : ay - by))
    .map((el) => el.join(" "))
    .join("\n");
}
