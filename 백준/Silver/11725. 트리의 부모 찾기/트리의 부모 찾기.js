const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift()[0], input));

/**
 * @param {number} N - 배열 A의 길이
 * @param {number[][]} graphArr - 수열
 * @returns {number} - 가장 큰 증가 부분 수열의 합
 */
function solution(N, graphArr) {
  const graphHash = graphArr.reduce((hash, [start, end]) => {
    if (!hash[start]) {
      hash[start] = [end];
    } else hash[start].push(end);

    if (!hash[end]) {
      hash[end] = [start];
    } else hash[end].push(start);

    return hash;
  }, {});

  const q = [{ curIdx: 1, parentCurIdx: -1 }];
  const result = Array.from({ length: N - 1 }, () => 0);

  while (q.length) {
    const { curIdx, parentCurIdx } = q.shift();

    const children = graphHash[curIdx].filter(
      (child) => child !== parentCurIdx
    );
    if (!children.length) continue;

    children.forEach((childIdx) => {
      result[childIdx - 1] = curIdx;
      q.push({ curIdx: childIdx, parentCurIdx: curIdx });
    });
  }

  return result.slice(1).join("\n");
}
