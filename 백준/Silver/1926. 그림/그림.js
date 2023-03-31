const fs = require('fs');

const filePath =
	process.platform === 'linux' ? '/dev/stdin' : 'BOJ/1926/input.txt';
let input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(item => item.split(' ').map(value => +value));

const mapY = +input[0][0];
const mapX = +input[0][1];


const paper = input.slice(1);
const chk = Array.from(Array(mapY), () => Array(mapX).fill(false));

const dirY = [0, 1, 0, -1];
const dirX = [1, 0, -1, 0];

function bfs(y, x) {
	let rs = 1;
	const q = [[y, x]];

	while (q.length > 0) {
		const [originY, originX] = q.pop();

		for (let range = 0; range < 4; range++) {
			const newY = originY + dirY[range];
			const newX = originX + dirX[range];
			if (0 <= newY && newY < mapY && 0 <= newX && newX < mapX) {
				if (paper[newY][newX] === 1 && !chk[newY][newX]) {
					rs++;
					chk[newY][newX] = true;
					q.push([newY, newX]);
				}
			}
		}
	}
	return rs;
}

let count = 0;
let maxVal = 0;
for (let paperY = 0; paperY < mapY; paperY++) {
	for (let paperX = 0; paperX < mapX; paperX++) {
		if (paper[paperY][paperX] === 1 && !chk[paperY][paperX]) {
			chk[paperY][paperX] = true;
			count++;
			maxVal = Math.max(maxVal, bfs(paperY, paperX));
		}
	}
}

console.log(count + '\n' + maxVal);
