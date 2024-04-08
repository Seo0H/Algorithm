const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());

console.log(solution(n, input));

/**
 * @param {number} n
 * @param {string[]} input
 * @returns
 */
function solution(n, input) {
  return input
    .reduce(reduceConcatenation(["YES", "NO"], "(", ")"), [])
    .join("\n");
}

function reduceConcatenation(logType, openTag, closeTag) {
  return (logs, item) => {
    const q = [];

    for (let i = 0; i < item.length; i++) {
      const curBracket = item[i];
      const comparedBracket = q.at(-1);

      const isQEmpty = !q.length;
      const isSameBracket = comparedBracket === curBracket;
      const isVPS = comparedBracket === openTag && curBracket === closeTag;

      if (isQEmpty || isSameBracket) {
        q.push(curBracket);
      } else if (isVPS) {
        q.pop();
      }
    }

    if (q.length === 0) {
      logs.push(logType[0]);
    } else {
      logs.push(logType[1]);
    }

    return logs;
  };
}
