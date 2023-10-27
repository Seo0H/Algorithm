function solution(input) {
  const answer = [];
  DFS([], 0);

  answer[0].sort((a, b) => a - b).forEach((e) => console.log(e));

  function DFS(arr, b) {
    if (arr.length === 7) {
      if (arr.reduce((acc, cur) => acc + cur, 0) === 100) {
        answer.push(arr);
      }
      return;
    }

    for (let i = b; i < 9; i++) {
      DFS([...arr, Number(input[i])], i + 1);
    }
  }
}


const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on("line", function (line) {
    input.push(line);
  })
  .on("close", function () {
    solution(input);
    process.exit();
  });
