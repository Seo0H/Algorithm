const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input.shift()));

/**
 * @param {[number,number]} first
 * @param {number[]} intervalOrder
 */
function solution([_, K], intervalOrder) {
  const cumulativeSum = intervalOrder.reduce((sumArray, cur, idx) => {
    const beforeNum = sumArray[idx - 1] ?? 0;
    sumArray[idx] = cur + beforeNum;
    return sumArray;
  }, []);

  const correctedK = K - 1;
  const result = [];
  for (let i = 0; i < cumulativeSum.length - correctedK; i++) {
    const start = cumulativeSum[i - 1] ?? 0;
    const end = cumulativeSum[i + correctedK];
    result.push(end - start);
  }

  return Math.max(...result);
}
