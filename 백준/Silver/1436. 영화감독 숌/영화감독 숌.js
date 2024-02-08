const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString();

console.log(solution(+input));

/**
 * @param {number} input
 */
function solution(input) {
  let answer = "666";
  let count = 0;
  const regex = new RegExp(/666/g);
  while (true) {
    if (count === input - 1) return Number(answer);

    regex.lastIndex = 0;
    answer = String(Number(answer) + 1);

    if (regex.test(answer)) {
      count += 1;
    }
  }
}
