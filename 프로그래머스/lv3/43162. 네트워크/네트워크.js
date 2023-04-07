function solution(n, computers) {
    var answer = 0;
    for(let y=0; y<n ; y++){
        for(let x=0; x<n; x++){
            if(computers[y][x] === 1) bfs(y,x);
        }
    }
    
    return answer;
    
    function bfs(y,x){
        answer++;
        computers[y][x] = 0;
        //q는 조건이 충족된 y의 값만을 알려준다.
        const nextY = [y];
        while(nextY.length > 0){
            const qy = nextY.shift();
            for(let x=0; x<n; x++){
                if(computers[qy][x] === 1){
                    computers[qy][x] = -1;
                    nextY.push([x])
                }
            }
        }
    }
    
    
}