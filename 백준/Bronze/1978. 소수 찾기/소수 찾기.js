const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {string[][]} input
 */
function solution([count, ...inputs]) {
  return inputs[0]
    .split(" ")
    .flat()
    .map(Number)
    .reduce((count, cur) => {
      if (isPrime(cur)) {
        count += 1;
      }
      return count;
    }, 0);
}

function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
