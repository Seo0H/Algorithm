const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = [Number(input[0]), Number(input[1]), input[2].split(" ").map(Number)];

console.log(solution(input));

/**
 * @param {[Number, Number, Number[]]} input
 */
function solution([sensorCount, concentrateCount, sensorMap]) {
  // 집중국 개수가 센서 개수보다 크거나 같으면 수신 가능 영역의 길이는 0.
  if (concentrateCount >= sensorCount) return 0;

  const diff = [];
  let answer = 0;

  // 길이 오름차순 정렬
  sensorMap.sort((a, b) => a - b);

  // diff 배열에 각 뒤와 앞의 센서 위치 차이를 저장
  for (let i = 0; i < sensorCount - 1; i += 1) {
    diff.push(sensorMap[i + 1] - sensorMap[i]);
  }

  // 길이 차이 내림차순 정렬
  diff.sort((a, b) => b - a);

  // 차이가 가장 큰 위치 제외하고 길이 차이 요소를 answer에 더하기.
  // diff[0]은 주어진 센서들 중 가장 거리가 긴 상황을 보여주기 때문.
  for (let i = concentrateCount - 1; i < sensorCount - 1; i += 1) {
    answer += diff[i];
  }

  return answer;
}
