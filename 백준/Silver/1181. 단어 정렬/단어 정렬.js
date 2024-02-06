const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {string[]} input
 */
function solution([count, ...inputs]) {
  const uniqWords = [...new Set(inputs)];

  return uniqWords
    .sort((a, b) => {
      if (a.length < b.length) return -1;
      if (a.length === b.length) {
        return sortWordsAlphabetically(a, b);
      }
      return 1;
    })
    .join("\n");
}

/**
 * @param {string} a
 * @param {string} b
 * NOTE: a와 b의 길이는 같다.
 */
function sortWordsAlphabetically(a, b) {
  const wordLength = a.length;

  for (let i = 0; i < wordLength; i++) {
    if (a[i] > b[i]) return 1;
    if (a[i] < b[i]) return -1;
  }

  return 0;
}
