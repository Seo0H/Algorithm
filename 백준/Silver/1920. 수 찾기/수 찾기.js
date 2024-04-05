const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

console.log(solution(input));

/**
 * @param {string[][]} input
 * @returns
 */
function solution([_, compared, __, targets]) {
  const comparedMap = compared.reduce(
    (map, cur) => map.set(cur, true),
    new Map()
  );

  const result = targets.reduce((logs, cur) => {
    comparedMap.has(cur) ? logs.push(1) : logs.push(0);
    return logs;
  }, []);

  return result.join("\n");
}

// -2^31 ~ 2^31
