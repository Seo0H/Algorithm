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
 * @param {[number, number]} input
 */
function solution([number, target]) {
  const q = [[number, 0]]; // [curNum, count]
  const visited = new Map();
  visited.set(number, true);
  let idx = 0;

  while (idx < q.length) {
    const [cur, curCount] = q[idx];
    idx += 1;

    if (cur === target) {
      return curCount;
    }

    for (let next of [cur - 1, cur + 1, cur * 2]) {
      if (next >= 0 && next <= 100000 && !visited.has(next)) {
        visited.set(next, true);
        q.push([next, curCount + 1]);
      }
    }
  }

  return 0;
}
