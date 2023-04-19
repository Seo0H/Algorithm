function solution(maps) {
    const q = [[0,0,1]];
    maps[0][0] = -1;
    const dir = [[0,1],[0,-1],[1,0],[-1,0]];
    
    while(q.length){
        const [qy, qx, cnt] = q.shift();
        for(const [dy,dx] of dir){
            const y = qy + dy;
            const x = qx + dx;
            if(y === maps.length-1 && x === maps[0].length -1) return cnt+1;
            if(maps[y] && maps[y][x] === 1){
                q.push([y,x,cnt+1]);
                maps[y][x] = -1;
            }
        }
    }
    
    return -1;
}