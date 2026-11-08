function solution(s){
    const memo = [];
    
    for (const char of s ) {
        if ("(" === char) {
            memo.push(char);
            continue
        }
     
        if (")" === char && memo.at(-1) === "(") {
            memo.pop()
            continue
        }
        
        if(")" === char){
            memo.push(char);
        }
    }
    
    return !memo.length
}