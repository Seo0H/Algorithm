const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift(), input.shift(), input));

/**
 * @param {[number,number]} first
 * @param {number[]} second
 * @param {number[][]} intervalOrder
 */
function solution(first, second, intervalOrder) {
  const cumulativeSum = second.reduce((sumArray, cur, idx) => {
    const beforeNum = sumArray[idx - 1] ?? 0;
    sumArray[idx] = cur + beforeNum;
    return sumArray;
  }, []);

  const idxCorrectionValue = 1;
  const result = intervalOrder.reduce((logs, [first, second]) => {
    const startValue = cumulativeSum[first - idxCorrectionValue - 1] ?? 0;
    const endValue = cumulativeSum[second - idxCorrectionValue] ?? 0;

    const result = endValue - startValue;
    logs.push(result);
    return logs;
  }, []);

  return result.join("\n");
}
