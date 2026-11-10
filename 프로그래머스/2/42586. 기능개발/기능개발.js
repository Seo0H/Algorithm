function solution(progresses, speeds) {
    const answer = [];
    let idx = 0;
    let day = 1;
    
    while(idx < progresses.length){
        let batchDeployCount = 0;
        progresses[idx] += speeds[idx] * day;
        
        if(progresses[idx] < 100) {
            day += Math.ceil((100 - progresses[idx]) / speeds[idx])
        }
        
        batchDeployCount += 1;
        
        idx += 1;
        
        while(progresses[idx] + day * speeds[idx] >= 100) {
            batchDeployCount += 1;
            idx += 1;
        }
        
        answer.push(batchDeployCount);
    }
    
    return answer
}