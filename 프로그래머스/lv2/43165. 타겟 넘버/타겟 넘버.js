// 0419 5번째 풀이
function solution(numbers, target) {
    var answer = 0;
    bfs(0,0);
    return answer;
    
    function bfs(sum, idx){
        if(idx >= numbers.length){
            if(sum === target) answer++
            return;
        }
        bfs(sum+numbers[idx], idx+1);
        bfs(sum-numbers[idx], idx+1);
    }
}