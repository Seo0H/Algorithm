const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input));

/**
 * @param {[number, number]} size
 * @param {number[][]} tomatoesMap
 */
function solution([M, N], tomatoesMap) {
  const { logs: ripeTomatoesLocations, cannotToGoCount } = tomatoesMap.reduce(
    getInitTomatoLocation,
    {
      logs: [],
      cannotToGoCount: 0,
    }
  );
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  const count = bfs(tomatoesMap, ripeTomatoesLocations, visited);
  return visited.flat().filter(Boolean).length === M * N - cannotToGoCount
    ? count
    : -1;
}

function getInitTomatoLocation(acc, row, yIdx) {
  row.forEach((tomato, xIdx) => {
    if (tomato === 1) {
      acc.logs.push([yIdx, xIdx, 0]);
    } else if (tomato === -1) {
      acc.cannotToGoCount += 1;
    }
  });
  return acc;
}

/**
 * @param {number[][]} map
 * @param {number[][]} coordinate
 * @param {boolean[][]} visited
 */
function bfs(map, coordinate, visited) {
  const q = coordinate;
  let qIdx = 0;
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let maxCount = 0;

  while (q.length > qIdx) {
    const [qy, qx, count] = q[qIdx++];
    visited[qy][qx] = true;
    maxCount = Math.max(maxCount, count);

    for (const [dy, dx] of dir) {
      const y = dy + qy;
      const x = dx + qx;

      if (y >= 0 && y < map.length && x >= 0 && x < map[0].length) {
        if (map[y][x] === 0 && !visited[y][x]) {
          visited[y][x] = true; // 즉시 방문 처리
          map[y][x] = 1; // 선택적으로 토마토를 익은 것으로 표시
          q.push([y, x, count + 1]);
        }
      }
    }
  }

  return maxCount;
}
