function solution(maps) {
    // [y, x]
    let mapY =  maps.length;
    let mapX =  maps[0].length;
    const dir = [ [0,1], [1,0], [0,-1],[-1,0] ];
    let q = [[0,0,1]];
    maps[0][0] = -1;
    
    while(q.length > 0){
        let [qy , qx, count] = q.shift();
        if(qy === mapY-1 && qx === mapX-1) return count;
        for(let d of dir){
            const [dy, dx] = d;
            const y = qy + dy;
            const x = qx + dx;
            if((maps[y] && maps[y][x]) && maps[y][x] === 1){
                maps[y][x] = -1;
                q.push([y, x, count+1]);
            }
        }
    }
    return -1;
}

