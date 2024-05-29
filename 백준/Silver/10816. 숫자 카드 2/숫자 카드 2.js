const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(
  solution(input.shift()[0], input.shift(), input.shift()[0], input.shift())
);

function solution(N, cards, M, wantCards) {
  const cardMap = cards.reduce((logs, card) => {
    if (logs.has(card)) {
      logs.set(card, logs.get(card) + 1);
    } else {
      logs.set(card, 1);
    }

    return logs;
  }, new Map());

  return wantCards
    .map((wantCard) => (cardMap.has(wantCard) ? cardMap.get(wantCard) : 0))
    .join(" ");
}
