const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(solution(input.shift()[0], input));

/**
 * @param {number} T
 * @param {number[]} numbers
 */
function solution(T, numbers) {
  return numbers
    .map((el) => {
      const result = bfs(
        Array.from({ length: el }, () => 1),
        el
      ).size;

      if (result === 0) return 1;

      return result;
    })
    .join("\n")
    .trim();
}

/**
 *
 * @param {number[]} numbers
 * @param {number} targetNumber
 * @param {Set<string>} result
 * @returns {Set<string>}
 */
function bfs(numbers, targetNumber, result = new Set()) {
  result.add(numbers.join());

  for (let i = 0; i < numbers.length; i++) {
    const sum = numbers[i] + numbers[i + 1];
    if (!sum || sum > 3) return result;
    const newNumbers = [...numbers.slice(0, i), sum, ...numbers.slice(i + 2)];
    bfs(newNumbers, targetNumber, result);
  }

  return result;
}
