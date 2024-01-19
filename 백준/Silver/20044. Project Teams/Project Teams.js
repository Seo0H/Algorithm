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
function solution([, studentAbilities]) {
  studentAbilities.sort((a, b) => a - b);

  let startIdx = 0;
  let endIdx = studentAbilities.length - 1;
  const middleOfStudentIdx = studentAbilities.length / 2 - 1;

  let minAbilityTeam = Number.MAX_SAFE_INTEGER;

  while (startIdx <= middleOfStudentIdx && endIdx > middleOfStudentIdx) {
    const thisTeamAbility = studentAbilities[startIdx] + studentAbilities[endIdx];
    if (thisTeamAbility < minAbilityTeam) {
      minAbilityTeam = thisTeamAbility;
    }

    startIdx += 1;
    endIdx -= 1;
  }

  return minAbilityTeam;
}
