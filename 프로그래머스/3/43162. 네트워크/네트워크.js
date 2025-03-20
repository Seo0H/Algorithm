function solution(n, computers) {
    var answer = 0;
    
    for(let y = 0; y < n; y++ ){
        for(let x = 0; x < n; x++){
            if(computers[y][x]){
                dfs(y,x);
                answer += 1;
            }
        }
    }
        
    return answer;
    
    function dfs(y, x){
        const q = [[y,x]]
        
        while(q.length){
            const [qy, qx] = q.shift()
            computers[qy][qx] = 0;
            const [ny ,nx] = [qx, qy]
            
            for(let x = 0; x < n; x++) {
                if(computers[ny][x]){
                    q.push([ny,x])
                }    
            }
        }
    }
}



//    0  1  2
// 0 [1, 1, 0]
// 1 [1, 1, 0]
// 2 [0, 0, 1]

//    0  1  2
// 0 [1, 1, 0]
// 1 [1, 1, 1]
// 2 [0, 1, 1]