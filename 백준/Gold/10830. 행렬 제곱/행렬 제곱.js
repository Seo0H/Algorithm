const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((e) => BigInt(e)));

// 분할정복

const answer = solution(input)
  .map((v) => v.join(" "))
  .join("\n");

console.log(answer);

function solution(input) {
  const [, exponent] = input.shift();

  input = input.reduce((acc, cur) => {
    acc.push(cur.map((e) => e % 1000n));
    return acc;
  }, []);

  return fastMatrixPow(input, exponent);
}

// 빠른 거듭제곱 구하는 함수
function fastMatrixPow(base, exponent) {
  if (exponent === 1n) {
    return base;
  }

  const half = fastMatrixPow(base, exponent / 2n);

  // 지수가 홀수인 경우
  if (exponent % 2n !== 0n) {
    return matrixMul(matrixMul(half, half), base);
  }

  return matrixMul(half, half);
}

// 행렬의 곱셈 함수
function matrixMul(base1, base2) {
  const N = base1.length; // base1,2는 정방 행렬
  const result = Array.from({ length: N }, () =>
    Array.from({ length: N }, (_) => 0n)
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        result[i][j] += base1[i][k] * base2[k][j];
      }
      result[i][j] %= 1000n;
    }
  }
  return result;
}
