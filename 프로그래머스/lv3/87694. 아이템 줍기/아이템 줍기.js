function solution(rectangle, characterX, characterY, itemX, itemY) {
    const rectangleX2 = rectangle.reduce((acc,[a, b, c, d]) => {
        const minX =a*2, minY=b*2, maxX=c*2, maxY=d*2;
        for(let y=minY; y<=maxY; y++){
            for(let x=minX; x<=maxX; x++) acc[y][x] = 1;
        }
        return acc;
    }, Array.from({length: 102}, _=> Array.from({length: 102},_=> 0)))
    
    const outLineMap = rectangle.reduce((acc,[a, b, c, d]) => {
        const minX =a*2, minY=b*2, maxX=c*2, maxY=d*2;
        for(let y=minY+1; y<maxY; y++){
            for(let x=minX+1; x<maxX; x++) acc[y][x] = 0;
        }
        return acc;
    }, rectangleX2)
    
    const q = [[characterY*2, characterX*2, 0]];
    const dir = [[0,1],[0,-1],[1,0],[-1,0]];
    
    while(q.length){
        const [qy, qx, cnt] = q.shift();
        if(qy === itemY*2 && qx === itemX*2) return cnt/2;
        for(let [dy,dx] of dir){
            const y = qy+dy;
            const x = qx+dx;
            if(outLineMap[y] && outLineMap[y][x] === 1 ){
                q.push([y,x,cnt+1]);
                outLineMap[y][x] = -1;
            }
        }
    }
}