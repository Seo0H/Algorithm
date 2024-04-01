const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split("\n");
const NM = input.shift().split(" ").map(Number);

console.log(
  solution(
    NM,
    input.map((el) => el.split(""))
  )
);

/**
 * @param {[number, number]} NM
 * @param {('W'|'B')[][]} board
 * @returns
 */
function solution([N, M], board) {
  const result = [];

  board.forEach((col, yIdx) => {
    col.forEach((_, xIdx) => {
      dfs(yIdx, xIdx, board, result);
    });
  });

  return Math.min(...result);
}

/**
 * @param {number} startYIdx
 * @param {number} startXIdx
 * @param {('W'|'B')[][]} board
 * @param {number[]} result
 */
function dfs(startYIdx, startXIdx, board, result) {
  let draw1 = 0;
  let draw2 = 0;

  const endYIdx = startYIdx + 8;
  const endXIdx = startXIdx + 8;

  if (endYIdx > board.length || endXIdx > board[0].length) return;

  for (let y = startYIdx; y < endYIdx; y++) {
    for (let x = startXIdx; x < endXIdx; x++) {
      const curValue = board[y][x];

      if ((y + x) % 2 === 0) {
        if (curValue !== "B") draw1 += 1; // 체스판 시작이 w 인경우
        if (curValue !== "W") draw2 += 1; // 체스판 시작이 b 인경우
      } else {
        if (curValue !== "W") draw1 += 1;
        if (curValue !== "B") draw2 += 1;
      }
    }
  }
  result.push(draw1);
  result.push(draw2);
}