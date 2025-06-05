function solution(x, y, n) {
    const q = [ { cur : y , count : 0 } ];
    let qidx = 0;
    
    while(qidx < q.length) {
        const { cur, count } = q[qidx]
        qidx += 1;
        
        if(cur === x) {
            return count
        }
        
        if(cur < x ) {
             continue
        }
        
        if(cur >= n) {
            q.push({ cur : cur - n, count : count + 1 });
        }
        
        if(cur % 2 === 0) {
            q.push({ cur : cur / 2, count : count + 1 });
        }
        
        if(cur % 3 === 0){
            q.push({ cur : cur / 3, count : count + 1 });
        }
        
    }
    
    return -1;
}

// 완탐