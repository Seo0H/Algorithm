const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {String[]} input
 */
function solution([S, T]) {
  while (T.length > 0) {
    const lastChar = T.at(-1);

    if (lastChar === "A") {
      T = T.slice(0, -1);
      if (T === S) return 1;
    }

    if (lastChar === "B") {
      T = T.slice(0, -1).split("").reverse().join("");
      if (T === S) return 1;
    }
  }
  return 0;
}
