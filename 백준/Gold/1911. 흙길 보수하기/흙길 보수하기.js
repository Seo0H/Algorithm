const fs = require('fs');

const filePath = process.platform === 'linux' ? './dev/stdin' : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

console.log(solution(input));

/**
 * @param {Number[][]} input
 */
function solution([[, plateSize], ...inputs]) {
  inputs.sort((a, b) => a[0] - b[0]);
  const platsLocationCheck = []; // 마지막 위치만 stack 으로 기록
  let count = 0;

  inputs.forEach(([start, end]) => {
    // 이미 덮혀있는 곳이라면 덮어야 할 웅덩이 시작 위치를 조정
    if (platsLocationCheck.at(-1) >= start) {
      start = platsLocationCheck.at(-1) + 1;
    }

    const pullSize = end - start;
    let plateCount = pullSize / plateSize;
    plateCount = Number.isInteger(plateCount) ? plateCount : Math.floor(plateCount) + 1;
    count += plateCount;

    // 덮혀져 있는 널판지 체크
    let plateEndIdx = start + plateCount * plateSize;
    platsLocationCheck.push(plateEndIdx - 1);
  });

  return count;
}
