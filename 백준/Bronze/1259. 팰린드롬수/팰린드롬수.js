const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {string[]} input
 */
function solution(input) {
  return input
    .slice(0, -1)
    .reduce((logs, text) => {
      const midIdx = Math.floor(text.length / 2);
      let start = 0;
      let end = text.length - 1;

      while (start <= midIdx) {
        const startChar = text[start];
        const endChar = text[end];

        if (startChar !== endChar) {
          logs.push("no");
          return logs;
        }

        start += 1;
        end -= 1;
      }

      logs.push("yes");
      return logs;
    }, [])
    .join("\n");
}
