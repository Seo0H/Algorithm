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

function solution([n, k]) {
  let parent = 1;
  let child = 1;

  for (i = 0; i < k; i++) {
    parent *= n - i;
    child *= k - i;
  }

  return parent / child;
}
