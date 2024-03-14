function solution(dirs) {
   const coordinates ={
       x: 0,
       y:0
   };
    
    const dirTemplet = {
        U: [0,0.5],
        D: [0,-0.5],
        R: [0.5,0],
        L: [-0.5,0]
    }
    
    const isOkayToLog = {
        U: (x,y) => !(y === 5),
        D: (x,y) => !(y === -5),
        R: (x,y) => !(x === 5),
        L: (x,y) => !(x === -5)
    }
    
    
    return dirs.split("").reduce((acc,dir) => {
        const { x , y } = coordinates;
        const [weightsX, weightsY] = dirTemplet[dir]
        
        if(isOkayToLog[dir](x,y)){
            acc.add(`${x + weightsX}_${y + weightsY}`);
            coordinates.x = x + weightsX * 2;
            coordinates.y = y + weightsY * 2;
        }

        return acc
    }, new Set()).size
}

