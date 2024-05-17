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
 * @param {number} N
 * @param {number[][]} input
 */
function solution(N, input) {
  input.sort(([aStart, aEnd], [bStart, bEnd]) => {
    if (aEnd === bEnd) {
      // 끝나는 시간이 같을 경우 시작하는 시간 기준 오름차순 정렬.
      // 끝나는 시간이 같을 경우 일찍 시작해야 최대한 더 많이 이용할 수 있기 때문..
      return aStart - bStart;
    }

    return aEnd - bEnd; // 끝나는 시간이 다를 경우 끝나는 시간 기준 오름차순 정렬
  });

  return input.reduce(
    ([lastEndTime, count], [start, end]) => {
      if (start >= lastEndTime) {
        count += 1;
        lastEndTime = end;
      }

      return [lastEndTime, count];
    },
    [0, 0]
  )[1];
}
