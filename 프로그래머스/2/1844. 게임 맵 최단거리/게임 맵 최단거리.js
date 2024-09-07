function solution(maps) {
    const q = [[0,0,1]]; // [y, x, count]
    const dir = [[0,1], [0,-1], [1,0], [-1,0]];
    const [targetY, targetX] = [maps.length-1, maps[0].length-1];
    
    while(q.length){
        const [qy, qx, count] = q.shift();
        
        for(const [dy,dx] of dir){
            const y = dy + qy;
            const x = dx + qx;
            
            if(y === targetY && x === targetX) return count + 1;
            
            if(maps[y] && maps[y][x] === 1){
                maps[y][x] = -1;
                q.push([y,x,count + 1])
            }
        }
    }
    
    return -1;
}