function solution(board) {
    let answer = 0;
    
    const stack = [[0,0]]
    const dir = [[0,1], [0,-1], [1,0], [-1,0]];
    
    const dangerInit = []; // 피해야 할 [y, x] 좌표를 담는 배열. 
    
    board.forEach((boardLine, y)=> {
        const boomIdxs = []
        boardLine.forEach((el, boomX) => {
            if(el === 1) dangerInit.push([y,boomX])
        })
    })
      
    dangerInit.forEach(([dy, dx]) => {
         
        for(const [y,x] of [...dir, [-1,-1], [1,1], [-1,1], [1,-1] ]){ 
            const thisY = dy + y;
            const thisX = dx + x;
            if(board[thisY] && board[thisY][thisX] === 0) board[thisY][thisX] = 1;
        }
    })
    
    board.forEach(boardLine => boardLine.forEach(el => {
        if(el === 0) answer++;
    }))
    // while(stack.length){
    //     const [qy, qx] = stack.pop();
    //     for(const [dy,dx] of dir){
    //         const y = dy + qy;
    //         const x = dx + qx;
    //         if(board[y] && board[y][x] === 0){
    //             board[y][x] = 1;
    //             stack.push([y,x]);
    //             answer++;
    //         }
    //     }
    // }
    
    return answer;
}