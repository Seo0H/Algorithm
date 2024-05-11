const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift().pop(), input));

/**
 * @param {number} T
 * @param {number[][]} cabbageFields
 */
function solution(T, cabbageFields) {
  const result = Array.from({ length: T }, () => 0);

  for (let testCaseNum = 0; testCaseNum < T; testCaseNum++) {
    const [horizon, vertical, cabbages] = cabbageFields.shift();
    const checkCabbageField = cabbageFields.slice(0, cabbages);
    cabbageFields = cabbageFields.slice(cabbages);

    const fieldsAbstract = Array.from({ length: vertical }, () =>
      Array.from({ length: horizon }, () => false)
    );

    checkCabbageField.forEach(([x, y]) => {
      fieldsAbstract[y][x] = true;
    });

    for (let y = 0; y < vertical; y++) {
      for (let x = 0; x < horizon; x++) {
        if (fieldsAbstract[y][x]) {
          dfs([y, x], fieldsAbstract);
          result[testCaseNum] += 1;
        }
      }
    }
  }

  return result.join("\n");
}

/**
 * @param {[number,number]} coordinate
 * @param {boolean[][]} checkFiled
 */
function dfs(coordinate, checkFiled) {
  const q = [coordinate];
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (q.length) {
    const [y, x] = q.shift();
    if (checkFiled[y] && checkFiled[y][x]) {
      checkFiled[y][x] = false;

      for (const [dy, dx] of dir) {
        const nextY = dy + y;
        const nextX = dx + x;

        if (checkFiled[nextY] && checkFiled[nextY][nextX]) {
          q.push([nextY, nextX]);
        }
      }
    }
  }
}
