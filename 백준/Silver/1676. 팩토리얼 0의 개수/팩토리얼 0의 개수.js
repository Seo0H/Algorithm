const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString();

console.log(solution(BigInt(input)));

/**
 * @param {number} input
 */
function solution(input) {
  let sum = 1n;

  while (input) {
    sum *= input;
    input -= 1n;
  }
  const sumStr = String(sum);
  let count = 0;

  for (let i = sumStr.length - 1; i >= 0; i--) {
    if (sumStr[i] !== "0") return count;
    else count += 1;
  }
}
