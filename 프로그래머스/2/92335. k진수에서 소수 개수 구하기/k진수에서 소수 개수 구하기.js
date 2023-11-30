function solution(n, k) {
    return n.toString(k).split('0').filter((cur) => isPrime(Number(cur))).length;;
}

function isPrime(num) {
	if (num <= 1) return false;

	if (num % 2 === 0) {
		return num === 2 ? true : false;
	}

	for (let divider = 3; divider <= parseInt(Math.sqrt(num)); divider += 2) {
		if (num % divider === 0) {
			return false;
		}
	}

	return true;
}

