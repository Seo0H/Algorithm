const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(solution(...input));

function solution(A, B) {
  let count = 1;

  while (true) {
    if (A === B) return count;
    if (!B) return -1;

    count += 1;

    if (B % 2 === 0) {
      B /= 2;
      continue;
    }

    let strB = String(B);

    if (strB.at(-1) !== "1") return -1;

    strB = strB.slice(0, strB.length - 1);

    if (strB) {
      B = Number(strB);
    } else {
      B = undefined;
    }
  }
}