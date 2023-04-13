function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    return answer;
    
    function dfs(idx,sum){
        if(idx === numbers.length){
            if(sum === target) answer++;
            return;
        }
        
        dfs(idx+1,sum + numbers[idx]);
        dfs(idx+1,sum - numbers[idx]);
    }    
}

