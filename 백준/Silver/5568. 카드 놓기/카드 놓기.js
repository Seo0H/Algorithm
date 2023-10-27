function solution(input) {
  const n = Number(input.shift());
  const k = Number(input.shift());
  const answer = [];
  const visited = Array.from({ length: n }, () => false);

  DFS(0, "", visited);

  return new Set(answer).size;

  function DFS(depth, str, visited) {
    if (depth === k) {
      answer.push(str);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        DFS(depth + 1, str + input[i], visited);
        visited[i] = false;
      }
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
    console.log(solution(input));
    process.exit();
  });
