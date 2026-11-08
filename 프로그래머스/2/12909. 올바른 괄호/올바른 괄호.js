function solution(s){
    let count = 0;
    
    for(const char of s) {
        count += char === '(' ? 1 : -1;
        if(count < 0) return false
    }
    return !count
}