function solution(maps) {
    let mapY =  maps.length;
    let mapX =  maps[0].length;
    const dir = [ [0,1], [1,0], [0,-1],[-1,0] ];
    const q = [[0,0,1]];
    maps[0][0] = 0;
    
    while(q.length>0){
        const [ qy, qx, cnt ] = q.shift();
        
        if(qy === mapY-1 && qx === mapX-1){
               return cnt;
        }
        
        for(let d of dir){
            const [dy, dx] = d;
            const y = qy + dy;
            const x = qx + dx;
            
            if((maps[y] && maps[y][x]) && maps[y][x] === 1 ){
                maps[y][x] = 0;
                q.push([y, x, cnt+1]);
            }
        }
    }
    return -1;
}

