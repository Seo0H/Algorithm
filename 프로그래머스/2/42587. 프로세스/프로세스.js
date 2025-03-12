function solution(priorities, location) {
    let processedCount = 0;
    
    while(priorities.length){
        const curJob = priorities.shift();
        location -= 1;
        
        const isTarget = location === -1;
        
        // 현재 job 보다 우선순위가 높은 job 이 있다면
        if(priorities.some(job => job > curJob)){
            // 처리해야 할 배열에 현재 job 을 넣는다.
            priorities.push(curJob);
            
            // 이때 이 job 이 검증해야 하는 위치였을 경우, 포인터를 처리해야 할 배열의 마지막 요소를 바라보도록 한다.
            if(isTarget){
                location = priorities.length - 1;
            }
            continue;
        }
        
        // 현재 Job 이 처리해야 하는 Job 인 경우
        processedCount += 1;
        
        if(isTarget){
            return processedCount
        }
                
    }
}

// priorities 탐색 포인터와 location 위치를 동기화시키는게 중요할듯
// while 문을 돌면서 탐색