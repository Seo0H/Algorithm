const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {string[]} input
 */
function solution(input) {
  input.shift();
  return input.sort((a, b) => a - b).join("\n");
}
