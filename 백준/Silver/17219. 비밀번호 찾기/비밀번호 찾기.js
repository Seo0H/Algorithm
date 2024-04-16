const fs = require("fs");

const filePath =
  process.platform === "linux" ? "./dev/stdin" : `${__dirname}/input.txt`;

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));

const [siteCounts, wantPasswordSiteCounts] = input.shift().map(Number);
const memoPassword = input.slice(0, siteCounts);
const wantPassword = input.slice(siteCounts).flat();
console.log(solution(memoPassword, wantPassword));

/**
 * @param {string[][]} memo
 * @param {string[]} wantPasswordSites
 * @returns
 */
function solution(memo, wantPasswordSites) {
  const passwordMap = memo.reduce((map, [site, password]) => {
    map.set(site, password);
    return map;
  }, new Map());

  const result = wantPasswordSites.reduce((logs, site) => {
    if (!passwordMap.has(site)) return logs;
    logs.push(passwordMap.get(site));
    return logs;
  }, []);

  return result.join("\n");
}
