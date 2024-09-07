
const patterns = {
  1: [1, 2, 3, 4, 5],
  2: [2, 1, 2, 3, 2, 4, 2, 5],
  3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
};

function solution(answers) {
  const sortedDESCResults = getScoreDESCResult(getResultMap(answers));
  const [no] = sortedDESCResults.at(0);
  const results = [no];

  for (let i = 1; i < sortedDESCResults.length; i++) {
    const [_, biggerScore] = sortedDESCResults[i - 1];
    const [curNo, curScore] = sortedDESCResults[i];

    if (biggerScore === curScore) {
      results.push(curNo);
    } else break;
  }

  return results.map(Number);
}

/**
 * @param {Object.<string, number>} resultMap key는 수포자 번호, value는 수포자 score
 * @description score 기준 내림차순 정렬된 배열
 */
const getScoreDESCResult = (resultMap) =>
  Object.entries(resultMap).sort(([, aScore], [, bScore]) => bScore - aScore);

/**
 * @param {number[]} answers
 * @returns {Object.<string, number>} resultMap. key는 수포자 번호, value는 수포자 score
 */
const getResultMap = (answers) => {
  const noIdxMap = { 1: 0, 2: 0, 3: 0 };

  return answers.reduce(
    (memo, testAnswer) => {
      for (let no in noIdxMap) {
        // 현재 수포자의 패턴
        const abandonerPattern = patterns[no];

        // idx 검증
        if (noIdxMap[no] >= abandonerPattern.length) {
          noIdxMap[no] = 0;
        }

        const curIdx = noIdxMap[no];
        noIdxMap[no] += 1;

        // 정답 평가
        if (abandonerPattern[curIdx] === testAnswer) {
          memo[no] += 1;
        }
      }

      return memo;
    },
    {
      1: 0,
      2: 0,
      3: 0,
    }
  );
};
