/*
 * @url https://www.acmicpc.net/problem/10830
 * @date 23-11-30
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : `${__dirname}/input.txt`;
const input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map(v => v.split(' ').map(Number));

const answer = solution(input)
	.map(lists => lists.join(' '))
	.join('\n');

console.log(answer);

// --- functions ---
function solution(input) {
	const [, exponent] = input.shift();

	// initialize - 모든 숫자가 1000인 경우 예외처리
	input = input.reduce((acc, cur) => {
		acc.push(cur.map(e => e % 1000));
		return acc;
	}, []);

	return fastMatrixPow(input, exponent);
}

// 빠른 거듭제곱 구하는 함수
function fastMatrixPow(base, exponent) {
	if (exponent === 1) {
		return base;
	}

	const half = fastMatrixPow(base, Math.floor(exponent / 2));

	// 지수가 홀수인 경우
	if (exponent % 2) {
		return matrixMul(matrixMul(half, half), base);
	}

	return matrixMul(half, half);
}

// 행렬의 곱셈 함수
function matrixMul(base1, base2) {
	const N = base1.length; // base1,2는 정방 행렬
	const result = Array.from({ length: N }, () => Array.from({ length: N }, _ => 0));

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			for (let k = 0; k < N; k++) {
				result[i][j] += base1[i][k] * base2[k][j];
			}
			result[i][j] %= 1000;
		}
	}
	return result;
}
