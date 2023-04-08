function solution(n, computers) {
    var answer = 0;
    // TO-DO: 전체탐색하면서 1 있는 부분에서 DFS 시작. 감지된 y 넘기기
    for(let y=0;y<n;y++){
        for(let x=0; x<n; x++){
            if(computers[y][x] === 1){
                computers[y][x] = -1;
                dfs(x);
            }
        }
    }
    
    return answer;
    
    
    function dfs(y){
        answer++;
        const q = [y];
        
        while(q.length > 0){
            const qy = q.shift();
            for(let i=0; i<n; i++)
                if(computers[qy][i] === 1) {
                    computers[qy][i] = -1;
                    q.push(i);
                }
            
        }
    }
}
