function solution(numbers) {
    const set = new Set();
    dfs(set, numbers.split(""), '');
    return set.size;
}

function dfs(set, nums, strNum){
    if(nums.length >= 1){
        for(let i=0; i< nums.length; i++){
            const thisNum = strNum+nums[i];
            let copyArr = [...nums];
			copyArr.splice(i, 1);
            if(isPrime(+thisNum)) set.add(+thisNum);
            dfs(set, copyArr, thisNum);
        }
    }
}

function isPrime(num){
    if (num < 2) return false;
	for (let i = 2; i*i <= num; i++) {
		if (num % i === 0) return false;
	}
	return true;
}