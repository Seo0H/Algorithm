const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {String[]} input
 */
function solution([questionInfo, ...inputs]) {
  const [numberOfPeopleNeverHeard, numOfPeopleNeverSeen] = questionInfo
    .split(" ")
    .map(Number);

  const neverHeardMap = new Set(inputs.slice(0, numberOfPeopleNeverHeard));
  const neverSeenList = inputs.slice(numberOfPeopleNeverHeard);

  const answer = neverSeenList.reduce((acc, el) => {
    if (neverHeardMap.has(el)) acc.push(el);
    return acc;
  }, []);

  answer.sort();

  return [answer.length, ...answer].join("\n");
}
