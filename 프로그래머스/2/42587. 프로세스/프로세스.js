function solution(priorities, location) {
    let pointer = 0;
    let count = 0;
    
    while (priorities[location] > -1) {
        if(priorities[pointer] === -1) {
            next();
            continue
        }
        
        const hasHigher = priorities.some(p => p > priorities[pointer]);
        
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
        next();
    }
    
    return 'something wrong...'
    
    function next() {
        pointer = ++pointer % priorities.length;
    }
}

