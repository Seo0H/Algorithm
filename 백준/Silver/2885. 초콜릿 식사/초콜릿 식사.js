const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = require("fs").readFileSync(filePath).toString();

console.log(solution(Number(input)));

/**
 * @param {Number} K
 */
function solution(K) {
  if ((K & (K - 1)) === 0) return `${K} 0`;

  let choco = 1;

  while (K > choco) {
    choco <<= 1;
  }

  const originChoco = choco;
  let sum = 0;
  let count = 0;

  while (sum !== K) {
    choco /= 2;
    if (choco <= K - sum) sum += choco;
    count += 1;
  }

  return `${originChoco} ${count}`;
}
