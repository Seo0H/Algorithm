const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString();

console.log(solution(Number(input)));

/**
 * @param {number} input
 */
function solution(input) {
  for (let i = 0; i < input; i++) {
    const decomposition = makeDecomposition(i);
    if (decomposition === input) return i;
  }
  return 0;
}

function makeDecomposition(number) {
  const decomposedElement = [number, ...String(number).split("").map(Number)];
  return decomposedElement.reduce((acc, cur) => acc + cur, 0);
}
