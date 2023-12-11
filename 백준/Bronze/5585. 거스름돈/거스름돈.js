const readline = require("readline");
const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? process.stdin
    : fs.createReadStream(`${__dirname}/input.txt`);

const rl = readline.createInterface({
  input: filePath, // 제출시 삭제
  output: process.stdout,
});

let input = "";
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const answer = solution(input);
  console.log(answer);
  process.exit();
});

function solution(input) {
  let received = 1000 - Number(input);
  const changeUnit = [500, 100, 50, 10, 5, 1];
  let changeUnitIdx = 0;
  let answer = 0;

  while (received) {
    if (received < changeUnit[changeUnitIdx] && changeUnitIdx < 6) {
      changeUnitIdx += 1;
    }

    answer += Math.floor(received / changeUnit[changeUnitIdx]);
    received = received % changeUnit[changeUnitIdx];
  }

  return answer;
}
