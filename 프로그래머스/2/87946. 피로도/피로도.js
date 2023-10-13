function solution(k, dungeons) {
    var answer = 0;
    const visitied = Array.from({length:dungeons.length}, () => false);
    dfs(k, visitied, 0, 0);
    
    return answer;
    
    function dfs(k, visited, count){
        if(count > answer) answer = count;
        
        for(let i=0; i<dungeons.length; i++){
            if(!visited[i] && k >= dungeons[i][0]){
                visited[i] = true;
                dfs( k - dungeons[i][1], visited, count+1);
                visited[i] = false;
            }
        }
    }
}
