const filePath =
  process.platform === "linux" ? "/dev/stdin" : `${__dirname}/input.txt`;

let input = require("fs").readFileSync(filePath).toString().split("\n");
const [N, K] = input.shift().split(" ");

console.log(solution(N, K, input.map(Number)));

/**
 * @param {number} N
 * @param {number} K
 * @param {number[]} coins
 */
function solution(N, K, coins) {
  let answer = 0;

  while (K) {
    const targetCoin = coins[N - 1];

    if (targetCoin <= K) {
      answer += Math.floor(K / targetCoin);
      K %= targetCoin;
    }

    N -= 1;
  }

  return answer;
}
