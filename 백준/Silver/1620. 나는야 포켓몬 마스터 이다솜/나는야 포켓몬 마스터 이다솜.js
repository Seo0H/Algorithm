const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(solution(input));

/**
 * @param {String[]} input
 */
function solution([questionInfo, ...inputs]) {
  const [pokemonCount] = questionInfo.split(" ");
  const pokemonList = inputs.slice(0, pokemonCount);
  const questionList = inputs.slice(pokemonCount);

  const pokemonOrderMap = pokemonList.reduce((acc, cur, idx) => {
    acc.set(cur, idx + 1);
    return acc;
  }, new Map());

  return questionList
    .reduce((answer, cur) => {
      if (Number.isNaN(+cur)) answer.push(pokemonOrderMap.get(cur));
      else answer.push(pokemonList[+cur - 1]);
      return answer;
    }, [])
    .join("\n");
}
