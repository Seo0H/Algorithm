const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(BigInt);

console.log(solution(input).toString());

function solution(input) {
  const [A, B, C] = input;
  return pow(B);

  function pow(exponent) {
    if (exponent === 1n) {
      return A % C;
    }

    const half = pow(exponent / 2n) % C;

    if (exponent % 2n) {
      return (half * half * (A % C)) % C;
    }

    return (half * half) % C;
  }
}