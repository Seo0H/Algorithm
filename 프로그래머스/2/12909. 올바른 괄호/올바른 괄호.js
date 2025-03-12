function solution(s){
    if( s[s.length-1] === '(' || s[0] === ')' ) return false;
    
    let count = 0;
    for(let i=0; i<s.length; i++){
        count += s[i] === '(' ? 1 : -1 ;
        if(count < 0) return false
    }

    return count === 0
}