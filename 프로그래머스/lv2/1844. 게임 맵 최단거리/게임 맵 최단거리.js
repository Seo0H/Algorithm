function solution(maps) {
    const q = [[0,0,1]]; // 다음에 가야 할 위치 , answer
    const dir = [[0,1],[0,-1],[1,0],[-1,0]];
    maps[0][0] = -1;
    
    while(q.length){
        const [ny, nx, cnt ] = q.shift();
       
        
        for(const [dy, dx] of dir){
            const y = ny + dy;
            const x = nx + dx;
            if(maps[y] && maps[y][x] === 1){
                if(y === maps.length-1 && x === maps[0].length-1) return cnt+1;
                q.push([y, x, cnt+1]);
                maps[y][x] = -1;
            }
        }
    }
    return -1;
}