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
function solution([[teamNumber, brokenKayakTeamNumbersCount], brokenKayakTeamNumbers, extraKayakTeamNumbers]) {
  function TeamStateCheck() {
    this.isKayakBroken = false;
    this.hasExtraKayak = false;
  }

  TeamStateCheck.prototype.isAbleToPlay = function () {
    // 카약이 부셔지지 않은 경우
    if (this.isKayakBroken === false) {
      return true;
    }

    // 카약이 부셔졌지만 여분의 카약이 있는 경우
    if (this.hasExtraKayak === true) {
      return true;
    }

    return false;
  };

  TeamStateCheck.prototype.isReadyToHandOverKayak = function () {
    if (this.isKayakBroken === false && this.hasExtraKayak === true) return true;
    return false;
  };

  const allTeamsState = Array.from({ length: teamNumber }, (_, idx) => {
    const state = new TeamStateCheck();
    if (brokenKayakTeamNumbers.includes(idx + 1)) {
      state.isKayakBroken = true;
    }
    if (extraKayakTeamNumbers.includes(idx + 1)) {
      state.hasExtraKayak = true;
    }
    return state;
  });

  allTeamsState.forEach((teamState, index) => {
    if (teamState.isAbleToPlay() === false) {
      const beforeTeam = allTeamsState[index - 1];
      const afterTeam = allTeamsState[index + 1];

      if (beforeTeam && beforeTeam.isReadyToHandOverKayak()) {
        teamState.isKayakBroken = false;
        beforeTeam.hasExtraKayak = false;
        return;
      }

      if (afterTeam && afterTeam.isReadyToHandOverKayak()) {
        teamState.isKayakBroken = false;
        afterTeam.hasExtraKayak = false;
        return;
      }
    }
  }, 0);

  const unableToPlayTeamCounts = allTeamsState.filter((team) => !team.isAbleToPlay(), 0).length;

  return unableToPlayTeamCounts;
}
