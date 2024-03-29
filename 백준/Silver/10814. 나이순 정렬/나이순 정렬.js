const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => {
    const result = el.split(" ");
    result[0] = Number(result[0]);
    return result;
  });

console.log(solution(input.shift().pop(), input));

/**
 * @param {number} N
 * @param {[number, string]} members
 */
function solution(N, members) {
  return members
    .sort((a, b) => {
      return a[0] - b[0];
    })
    .map((e) => e.join(" "))
    .join("\n");
}
