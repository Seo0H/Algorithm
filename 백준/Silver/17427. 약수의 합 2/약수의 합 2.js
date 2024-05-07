const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim();

console.log(solution(Number(input)));

/**
 * @param {number} num
 */
function solution(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += Math.floor(num / i) * i;
  }
  return result;
}
