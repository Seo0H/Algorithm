function solution(n, computers) {
    var answer = 0;
    
    for(let y=0; y<n; y++){
        for(let x=0; x<n; x++){
            if(computers[y][x]===1) dfs(y,x);
        }
    }
    
    return answer;
    
    function dfs(y,x){
        answer++;
        computers[y][x] = -1;
        
        const q=[y];
        
        while(q.length > 0){
            const qy = q.shift();
            for(let i=0; i<n; i++){
                if(computers[qy] && computers[qy][i] === 1){
                    computers[qy][i] = -1;
                    q.push(i);
                }
            }
        }
    }    
}

