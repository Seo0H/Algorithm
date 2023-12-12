const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let input = require("fs").readFileSync(filePath).toString();

console.log(solution(input));

function solution(input) {
  let leftBag = input;
  let answer = 0;

  while (leftBag) {
    if (leftBag % 5 === 0) return answer + Math.floor(leftBag / 5);
    if (leftBag < 3) return -1;

    leftBag -= 3;
    answer += 1;
  }

  return answer;
}
