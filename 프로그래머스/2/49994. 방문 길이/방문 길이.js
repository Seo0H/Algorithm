

function solution(dirs) {
    const location = [0,0];
    let answer = 0
    
    const dirTemplet = {
        'U':[0,0.5],
        'D':[0,-0.5],
        'L':[-0.5,0],
        'R':[0.5,0],
        }

    const logs= dirs.split('').reduce((logs,cur) => {
        const [dx, dy] = dirTemplet[cur];
        const [cx, cy] = location;
        
        let nx = dx + cx;
        let ny = dy + cy;
        
        if(ny > 5 || ny < -5 || nx > 5 || nx < -5) return logs
        
        if(!logs[`${nx}/${ny}`]) {
            answer += 1
        }
        
        logs[`${nx}/${ny}`] = true;
        
        if(dx !== 0) {
            nx += dx;
            location[0] = nx;
            logs[`${nx}/${ny}`] = true;
        } else {
            ny += dy;
            location[1] = ny;
            logs[`${nx}/${ny}`] = true;
        }
        
        return logs
    },{});
    
    return answer
    
}

