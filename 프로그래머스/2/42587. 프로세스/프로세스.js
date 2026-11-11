function solution(priorities, location) {
    let pointer = 0;
    let count = 0;
    
    let maxPriority = Math.max(...priorities);
    
    while (priorities[location] > -1) {
        const curPriority = priorities[pointer];
        
        if(curPriority === -1) {
            next();
            continue
        }
        
        const hasHigher = curPriority < maxPriority;
        
        if(hasHigher) {
            next();
            continue
        }
        
        // highest priority process is cur process..
        
        count += 1;
        
        if(pointer === location) {
            return count
        }
        
        priorities[pointer] = -1; // 처리 완료
        maxPriority = Math.max(...priorities);
        next();
    }
    
    return 'something wrong...'
    
    function next() {
        pointer = ++pointer % priorities.length;
    }
}

