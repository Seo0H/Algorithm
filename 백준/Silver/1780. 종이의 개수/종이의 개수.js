const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(
    (el) =>
      el
        .trim()
        .split(" ")
        .map((el) => Number(el) + 1) // 2로 바꿔주기
  );

solution(input);
// 분할정복

function solution(input) {
  const answer = [0, 0, 0];
  const size = input.shift() - 1; // 1 더한 것 보정

  divide(0, 0, size);

  answer.forEach((e) => console.log(e));

  // --- utils ---
  function check(indexY, indexX, nextSize) {
    // 주어진 x,y좌표로 해당 범위에 같은 요소들만 있는지 판단한다.
    // 만약 하나의 요소들로만 구성된 종이이면 true
    // 아니라면 false
    const initVal = input[indexY][indexX];

    for (let y = indexY; y < indexY + nextSize; y++) {
      for (let x = indexX; x < indexX + nextSize; x++) {
        if (input[y][x] !== initVal) return false;
      }
    }
    return true;
  }

  function divide(indexY, indexX, size) {
    // 탐색 중 정사각형 범위에서 온전한 크기의 종이를 발견한다면 그것은 하나의 색종이임 -> 정복
    if (check(indexY, indexX, size)) {
      answer[input[indexY][indexX]]++;
      return;
    }

    // 들어온 정사각형 크기의 section을 3개로 나누어 탐색 -> 분할
    const nextSize = size / 3;
    const sizes = [0, nextSize, nextSize + nextSize];
    const sizeComb = sizes.reduce((acc, first) => {
      sizes.forEach((second) => acc.push([first, second]));
      return acc;
    }, []);

    sizeComb.forEach(([plusYSize, plusXSize]) =>
      divide(indexY + plusYSize, indexX + plusXSize, nextSize)
    );
  }
}