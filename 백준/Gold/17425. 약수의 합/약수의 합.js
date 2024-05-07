const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input.shift(), input));

/**
 * @param {number[]} numbers
 */
function solution(_, numbers) {
  const max = Math.max(...numbers);
  const tmp = Array.from({ length: max + 1 }, () => 1);
  const memo = Array.from({ length: max + 1 }, () => 0);
  memo[1] = 1;

  for (let i = 2; i <= max; i++) {
    for (let j = 1; j <= Math.floor(max / i); j++) {
      tmp[i * j] += i;
    }
    memo[i] = memo[i - 1] + tmp[i];
  }

  return numbers.map((num) => memo[num]).join("\n");
}
