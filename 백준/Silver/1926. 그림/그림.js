const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.split(" ").map((value) => +value));

const [n, m] = input.shift();
const visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
);
let direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];
let answer = 0; // 그림의 갯수
let result = [];
const BFS = (start) => {
    let queue = [start];
    let total = 0; // 그림의 넓이 카운트
    while (queue.length) {
        let [y, x] = queue.shift();
        if (visited[y][x]) continue;
        visited[y][x] = true;
        total++;
        for (let i = 0; i < direction.length; i++) {
            let [dy, dx] = [y + direction[i][0], x + direction[i][1]];
            if (dy < 0 || dx < 0 || dy >= n || dx >= m) continue;
            if (visited[dy][dx]) continue;
            if (input[dy][dx] === 1) { // 상하좌우 인접한곳에 그림이 연결되있으면
                queue.push([dy, dx]);
            }
        }
    }
    if (total) { // 그림의 넓이가 계산되어 있다면
        answer++; // 그림의 갯수 +1
        result.push(total); // result에 그림의 넓이 push
    }
};

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (input[i][j] === 1 && !visited[i][j]) { // 그림이 있는곳이고 방문한적이 없다면 BFS 실행
            BFS([i, j]);
        }
    }
}
if (!answer) return console.log(0 + "\n" + 0); // 그림의 갯수가 없으면 0 출력
console.log(answer + "\n" + Math.max(...result)); // 그림의 갯수와 넓이가 담긴 배열에서 제일 큰 값을 출력한다