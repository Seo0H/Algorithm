function solution(maps) {
    var answer = 0;

    
    for(let y=0; y<maps.length; y++){
        for(let x=0; x<maps[0].length; x++){
            if(maps[y] && maps[y][x] && maps[y][x] === 1){
                answer = answer ? Math.min(answer, dfs(y,x)) : dfs(y,x);
            }
        }
    }

    return answer;
    
    function dfs(y,x){
        const dir = [[0,1],[1,0],[0,-1],[-1,0]];
        const q = [[y,x]];
        let a = 0;
        
        while(q.length){
            const [y,x] = q.shift();
            maps[y][x] = -1;
            if(y === maps.length-1 && x === maps[0].length-1) {
                console.log(a)
                return ++a;
            }
        
            for(let [dy, dx] of dir){
                const ny = y + dy;
                const nx = x + dx;
                
                if(maps[ny] && maps[ny][nx] && maps[ny][nx] === 1){
                    q.push([ny,nx]);
                    a++;
                }
            }
        }
        
        return -1;
   }
}
