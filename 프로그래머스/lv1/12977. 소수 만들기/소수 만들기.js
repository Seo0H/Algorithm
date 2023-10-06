function solution(nums) {
    let answer = 0;
    const visited = Array.from({length: nums.length}, () => false); 
    bsf(0, visited, 0, 0);
    
    return answer;
    
    function bsf(idx, visited, depth, sum){

        if(depth === 3) {
            if(isPrime(sum)) answer++;
            return ;
        }
        
        for(let i=idx; i < nums.length ; i++){
            if(!visited[i]) {
                visited[i] = true;
                bsf(i + 1, visited, depth + 1 , sum + nums[i]);
                visited[i] = false;
            }
        }
    }
}

function isPrime(num){
    for(let i=2 ; i < Math.sqrt(num)+1 ; i++){
        if (num % i === 0) return false;
    }
    return true;
}