function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    const characterX2 = characterX * 2;
    const characterY2 = characterY * 2;
    
    const filledMapx2 = rectangle.reduce((acc, [a, b, c, d]) => {
        const minX = a*2, minY = b*2, maxX = c*2, maxY = d*2;
        for(let y = minY ; y<=maxY; y++)
            for(let x = minX ; x<=maxX; x++) acc[y][x] = 1;
        return acc;
    }, Array.from({length: 102}, _=> Array.from({length: 102}, _=>0)))
    
    const outlineMapx2 = rectangle.reduce((acc, [a, b, c, d] ) => {
        const minX = a*2, minY = b*2, maxX = c*2, maxY = d*2;
        for(let y = minY+1 ; y<maxY; y++)
            for(let x = minX+1 ; x<maxX; x++) acc[y][x] = 0;
        return acc;
    }, filledMapx2)
    
    const q = [[characterY2,characterX2,0]];
    const dir = [[0,1],[0,-1],[1,0],[-1,0]];
    
    while(q.length){
        const [qy, qx, cnt] = q.shift();
        if(qy === itemY*2 && qx === itemX*2) return cnt/2;
        for(let d of dir){
            const [dy, dx] = d;
            const y = qy+dy;
            const x = qx+dx;
            if(outlineMapx2[y] && outlineMapx2[y][x] === 1){
                q.push([y,x,cnt+1]);
                outlineMapx2[y][x] = -1;
            }
        }
        
    }
    return -1;
}