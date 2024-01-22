const fs = require('fs');

const filePath = process.platform === 'linux' ? './dev/stdin' : `${__dirname}/input.txt`;

const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

console.log(solution(input));

/**
 * @param {String[][]} input
 */
function solution(inputs) {
  return inputs
    .reduce((acc, input) => {
      divide(input) ? acc.push('YES') : acc.push('NO');
      return acc;
    }, [])
    .join('\n');
}

/**
 * @param {String} input
 */
function isOrigamiPossible(input) {
  const midIdx = Math.floor(input.length / 2);

  for (let startIdx = 0, endIdx = input.length - 1; startIdx < midIdx; startIdx++, endIdx--) {
    if (input[startIdx] === '0' && input[endIdx] === '0') {
      return false;
    }

    if (input[startIdx] === '1' && input[endIdx] === '1') {
      return false;
    }
  }

  return true;
}

/**
 * @param {String} input
 */
function divide(input) {
  if (isOrigamiPossible(input) === false) return false;

  if (input.length === 1) {
    return true;
  }

  const midIdx = Math.floor(input.length / 2);

  return divide(input.substring(0, midIdx)) && divide(input.substring(midIdx + 1, input.length));
}
