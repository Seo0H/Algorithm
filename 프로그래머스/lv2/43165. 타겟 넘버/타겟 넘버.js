function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    return answer;
    
    function dfs(index, sum){
        //index === numbers.length : 주어진 숫자를 다 더했다는 뜻.
        // 이 상태에서 판단해야 함
        if(index === numbers.length) {
            if(sum === target) answer++;
            return;
        }
        
        dfs(index+1, sum + numbers[index]);
        dfs(index+1, sum - numbers[index]);
    }
}