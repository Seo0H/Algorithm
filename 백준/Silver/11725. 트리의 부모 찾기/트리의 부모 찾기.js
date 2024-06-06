const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

console.log(solution(input.shift()[0], input));

/**
 * @param {number} N
 * @param {number[][]} graphArr
 */
function solution(N, graphArr) {
  const graphHash = graphArr.reduce(makeGraphHash, new Map());

  const q = [{ idx: 1, parent: -1 }];
  const result = Array.from({ length: N - 2 }, () => 0);

  while (q.length) {
    const { idx, parent } = q.shift();

    const children = graphHash.get(idx).filter((child) => child !== parent);

    if (!children.length) continue;

    children.forEach((childIdx) => {
      result[childIdx - 2] = idx;
      q.push({ idx: childIdx, parent: idx });
    });
  }

  return result.join("\n");
}

function makeGraphHash(hash, [start, end]) {
  if (!hash.has(start)) {
    hash.set(start, [end]);
  } else {
    const addedArray = hash.get(start);
    addedArray.push(end);
    hash.set(start, addedArray);
  }

  if (!hash.has(end)) {
    hash.set(end, [start]);
  } else {
    const addedArray = hash.get(end);
    addedArray.push(start);
    hash.set(end, addedArray);
  }

  return hash;
}
