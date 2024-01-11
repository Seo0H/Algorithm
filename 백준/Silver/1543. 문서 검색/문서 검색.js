const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {String[]} input
 * @return {Number}
 */
function solution([docs, searchWord]) {
  return [...docs.matchAll(new RegExp(searchWord, "g"))].length;
}
