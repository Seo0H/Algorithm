function solution(maps) {
    var answer = 0;
    const dir = [[0,1],[1,0],[0,-1],[-1,0]];
    const q = [[0,0,1]];
        
    while(q.length){
        const [y,x,a] = q.shift();
        
        if(y === maps.length-1 && x === maps[0].length-1) {
            return a;
        }
        
        for(let [dy, dx] of dir){
            const ny = y + dy;
            const nx = x + dx;
            
            if(maps[ny] && maps[ny][nx] && maps[ny][nx] === 1){
                q.push([ny,nx, a+1]);
                maps[ny][nx] = -1;
            }
        }
    }
        
    return -1;
}
