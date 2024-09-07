const patterns = {
    1 : [1, 2, 3, 4, 5],
    2 : [2, 1, 2, 3, 2, 4, 2, 5],
    3 : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
}

function solution(answers) {
  const noIdx = { 1: 0, 2: 0, 3: 0 };

  const resultMap = answers.reduce(getUserAnswerMap(noIdx), {
    1: 0,
    2: 0,
    3: 0,
  });

  const sortedResults = getScoreDESCResult(resultMap);
  const [no] = sortedResults.at(0);
  const results = [no];

  for (let i = 1; i < sortedResults.length; i++) {
    const [_, biggerScore] = sortedResults[i - 1];
    const [curNo, curScore] = sortedResults[i];

    if (biggerScore === curScore) {
      results.push(curNo);
    } else break;
  }

  return results.map(Number);
}

// 스코어 내림차순 정렬
const getScoreDESCResult = (resultMap) =>
  Object.entries(resultMap).sort(([, aScore], [, bScore]) => bScore - aScore);

const getUserAnswerMap = (noIdx) => (memo, testAnswer) => {
  for (let no in noIdx) {
    // 현재 수포자의 패턴
    const abandonerPattern = patterns[no];

    // idx 검증
    if (noIdx[no] >= abandonerPattern.length) {
      noIdx[no] = 0;
    }

    const curIdx = noIdx[no];
    noIdx[no] += 1;

    // 정답 평가
    if (abandonerPattern[curIdx] === testAnswer) {
      memo[no] += 1;
    }
  }

  return memo;
};
