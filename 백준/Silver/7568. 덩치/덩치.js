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
 * @param {number} N
 * @param {number[][]} volumes
 */
function solution(N, volumes) {
  return volumes
    .reduce((logs, curVolume, idx) => {
      const count = volumes.reduce((count, comparedVolume) => {
        if (isBigger(curVolume, comparedVolume) === comparedVolume) {
          count += 1;
        }
        return count;
      }, 1);
      logs.push(count);
      return logs;
    }, [])
    .join(" ");
}

/**
 *
 * @param {[number,number]} a
 * @param {[number,number]} b
 */
function isBigger(a, b) {
  const [aWight, aHight] = a;
  const [bWight, bHight] = b;

  if (aWight > bWight && aHight > bHight) return a;
  if (bWight > aWight && bHight > aHight) return b;

  return false;
}