const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(input));

/**
 * @param {number[][]} input
 */
function solution([girls, boys, K]) {
  let count = 0;

  while (girls >= 2 && boys >= 1) {
    count += 1;
    girls -= 2;
    boys -= 1;
  }

  if (K > 0) {
    while (girls > 0) {
      girls -= 1;
      K -= 1;
    }

    while (boys > 0) {
      boys -= 1;
      K -= 1;
    }

    while (K > 0) {
      count -= 1;
      K -= 3;
    }
  }

  return count < 0 ? 0 : count;
}
