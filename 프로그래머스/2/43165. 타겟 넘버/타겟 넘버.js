function solution(numbers, target) {
    let answer = 0;
    dfs(0);
    return answer;
    
    
    function dfs(number, depth = 0){
        if(numbers.length === depth){
            if(target === number){
                answer += 1
            }
            return
        }

        dfs(number + numbers[depth], depth + 1)
        dfs(number - numbers[depth], depth + 1)
    }
}
