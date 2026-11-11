function solution(priorities, location) {
    const queue = priorities.map((priority, idx) => ({priority, idx}));
    const counts = Array.from({length: 10}, () => 0);
    priorities.forEach(p => counts[p]++);
    
    let currentMax = 9;
    while (counts[currentMax] === 0) currentMax--;
    
    let count = 0;
    
    while(queue.length > 0) {
        const cur = queue.shift();
        
        // has higher
        if(cur.priority < currentMax) {
            queue.push(cur)
            continue
        }
        
        // cur process is highest..
        count++;
        counts[cur.priority]--;
        
        while( counts[currentMax] === 0 && currentMax > 0 ){
            currentMax--;
        }
        
        if(cur.idx === location) {
            return count
        }
    }
}

