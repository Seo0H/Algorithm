function solution(maps) {
    const q = [[0,0,1]];
    const dir = [[1,0], [-1,0], [0,1], [0,-1]];
    maps[0][0] = -1;
        
    while(q.length > 0){
        const [qy, qx, count] = q.shift();
        if(qy === maps.length-1 && qx === maps[0].length - 1) return count;
        for(const d of dir){
            const [dy, dx] = d;
            const ny = dy + qy;
            const nx = dx + qx;
            if(maps[ny] && maps[ny][nx] && maps[ny][nx] === 1){
                maps[ny][nx] = -1;
                q.push([ny,nx, count+1]);
            }
        }
    }
    
    return -1;
}


