const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {String[]} input
 */
function solution([S, P]) {
  let count = 0;
  for (let i = 0; i < P.length; i++) {
    let compCharLength = 0;
    let compareChar = P[i];
    let regex = new RegExp(compareChar, "g");

    while (regex.test(S)) {
      compCharLength += 1;
      compareChar += P[i + compCharLength];
      regex = new RegExp(compareChar, "g");
    }

    if (compCharLength >= 2) {
      i += compCharLength - 1;
    }
    count += 1;
  }

  return count;
}
