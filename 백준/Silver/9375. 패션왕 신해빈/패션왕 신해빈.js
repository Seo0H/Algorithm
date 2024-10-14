const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const [testCaseCount, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(solution(testCaseCount, inputs));

/**
 * @param {number} testCaseCount
 * @param {string[]} inputs
 */
function solution(testCaseCount, inputs) {
  const result = [];

  while (inputs.length) {
    const N = inputs.shift();
    const clothesStringArray = inputs.slice(0, N);

    const clothesMap = clothesStringArray.reduce((acc, cur) => {
      const [, part] = cur.split(" ");
      acc.has(part) ? acc.set(part, acc.get(part) + 1) : acc.set(part, 1);

      return acc;
    }, new Map());

    result.push(
      [...clothesMap].reduce((acc, [key, value]) => acc * (value + 1), 1) - 1
    );
    inputs = inputs.slice(N);
  }

  return result.join("\n");
}
