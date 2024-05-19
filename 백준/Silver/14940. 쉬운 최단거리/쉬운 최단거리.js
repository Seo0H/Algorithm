const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input));

function solution([N, M], maps) {
  const targetCoordinate = maps.reduce(
    (logs, line, y) => {
      const x = line.findIndex((el) => el === 2);

      if (x >= 0) {
        logs.x = x;
        logs.y = y;
      }

      return logs;
    },
    { x: -1, y: -1 }
  ); // y, x

  const resultMap = Array.from({ length: N }, (_, y) =>
    Array.from({ length: M }, (_, x) => {
      if (maps[y][x] === 0) return 0;
      return -1;
    })
  );

  const q = [{ ...targetCoordinate, count: 0 }];
  maps[targetCoordinate.y][targetCoordinate.x] = "V";

  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (q.length) {
    const { x: curX, y: curY, count } = q.shift();
    resultMap[curY][curX] = count;

    for (const [dy, dx] of dir) {
      const x = curX + dx;
      const y = curY + dy;

      if (maps[y] && maps[y][x] === 1) {
        maps[y][x] = "V";
        q.push({ x, y, count: count + 1 });
      }
    }
  }
  return makeFlat(resultMap);
}

function makeFlat(dimensionalArray) {
  return dimensionalArray.map((el) => el.join(" ")).join("\n");
}
