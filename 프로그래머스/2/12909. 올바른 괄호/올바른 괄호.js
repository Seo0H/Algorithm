function solution(s){
    if(s.at(0) === ')' || s.at(-1) === '(') return false;
    
    const q = [];
    
    for(let i = 0 ; i < s.length ; i++) {
        const target = s[i];
        
        if(target === '(') {
            q.push(target);
            continue
        }
        
        q.pop();
    }
    
    return !q.length
}