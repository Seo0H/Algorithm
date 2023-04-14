function solution(n, computers) {
    var answer = 0;
    
    for(let y=0; y<computers.length; y++){
       for(let x=0; x<computers.length; x++){
            if(computers[y][x] === 1) {
                answer++;
                computers[y][x] = -1;
                dfs(x)
            }
        } 
    }
    return answer;
    
    function dfs(y){
        for(let i=0; i<computers.length; i++){
           if(computers[y][i] === 1) {
               computers[y][i] = -1;
               dfs(i);
           }
       }
    }
    
}