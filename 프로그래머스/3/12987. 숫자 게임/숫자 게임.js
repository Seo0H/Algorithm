function solution(A, B) {
    let answer = 0;
    const check = new Set();
    let idx = A.length - 1;
    
    A.sort((a,b) => a - b);
    B.sort((a,b) => a - b);
    
    
    while(idx >= 0) {
        const a = A[idx];
        const b = B[idx];
        idx -= 1;
        
       if(a < b) {
           answer += 1;
           A.pop();
           B.pop();
           
           continue;
       }
        
        A.pop();
        B.shift();
    }
    
    return answer;
} 