function solution(q, location) {
    var answer = 0;
    while(true){
        
        const process = q.shift();
        const beforeLen = q.length;
        
        for(let i=0 ; i<q.length; i++){
            if(q[i] > process) {
                q.push(process);
                
                break;
            }
        }
        const afterLen = q.length;
        if(beforeLen === afterLen) {
            answer++;
            if(location === 0) break;
        }
        
        location = location === 0 ? q.length-1 : location-1;
        
        
    }
    
    return answer;
}