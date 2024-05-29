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

function solution([M, N]) {
  const L = getLeastCommonMultiple(M, N);
  const G = getGreatestCommonMultiple(M, N, L);

  return [L, G].join("\n");
}

function getLeastCommonMultiple(a, b) {
  let smaller = Math.min(a, b);
  let bigger = Math.max(a, b);
  let r;

  while (smaller !== 0) {
    r = bigger % smaller;
    bigger = smaller;
    smaller = r;
  }

  return bigger;
}

function getGreatestCommonMultiple(a, b, L) {
  return (a * b) / L;
}
