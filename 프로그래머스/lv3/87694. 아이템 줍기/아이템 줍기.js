function solution(rectangle, characterX, characterY, itemX, itemY) {
    
    // 사각형을 2배로 키우기
    const douobleReacts = rectangle.reduce((acc,cur) => {
        const tmpVal = []
        cur.forEach(e => tmpVal.push(e*2));
        acc.push(tmpVal);
        return acc;
    },[])
    
    // 2배로 키운 사각형을 기준으로 map 그리기
    // const [mapY, mapX] = douobleReacts.reduce((acc,cur)=>{
    //     const [_, __, maxX, maxY] = cur;
    //     const [accY, accX] = acc;
    //     if(accY < maxY) acc[0] = maxY;
    //     if(accX < maxX) acc[1] = maxX;
    //     return acc;
    // },[0,0])
    const map = Array.from({length: 103}, () => Array.from({length: 103}, _ => 0));
    
    // 두배로 키운 사각형의 외각선을 map에 표기하기
    douobleReacts.forEach(e => {
        const [minX, minY, maxX, maxY]= e;
        for(let y = minY ; y<= maxY; y++){
            for(let x=minX; x<=maxX; x++){
                map[y][x] = 1;
            }
        }
    })
    
    douobleReacts.forEach(e => {
        const [minX, minY, maxX, maxY]= e;
        for(let y=minY+1 ; y<maxY; y++){
            for(let x=minX+1; x<maxX; x++){
                map[y][x] = 0;
            }
        }
    })
    
    return bfs(characterY*2, characterX*2)/2;
    
    function bfs(y,x){
        const q = [[y, x, 0]];
        const dir = [[0,1], [0,-1], [1,0], [-1,0]];
        
        while(q.length > 0){
            const [qy, qx, cnt] = q.shift();
            if(qy === itemY*2 && qx === itemX*2) {
                console.log(qy, qx)
                return cnt
            };
            
            for(let d of dir){
                const [dy, dx] = d;
                const ny = qy + dy;
                const nx = qx + dx;
                if(map[ny] && map[ny][nx] && map[ny][nx] === 1){
                    q.push([ny, nx, cnt+1]);
                    map[ny][nx] = -1;
                }
            }            
        }
    } 
}

