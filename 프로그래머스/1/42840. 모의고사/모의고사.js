
const patterns = {
  1: [1, 2, 3, 4, 5],
  2: [2, 1, 2, 3, 2, 4, 2, 5],
  3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
};

function solution(answers) {
  const results = getResults(answers);
  const max = Math.max(...results);
  return results.reduce((acc,cur,no) => {
      if(cur === max) acc.push(no);
      return acc
  }, []).sort()
}

/**
 * @param {number[]} answers
 * @returns {[null, number, number, number]} results 수포자 번호가 index이고 각 요소의 값은 점수
 */
const getResults = (answers) => {
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
    [null, 0, 0, 0]
  );
};
