const OPEN = '(';
const CLOSE = ')';

function solution(s){
    const q = [];
    
    if( s[s.length-1] === OPEN || s[0] === CLOSE ) return false;
    
    for(let i=0; i<s.length; i++){
        // 현재 문자열이 열려있으면
        if(s[i] === OPEN){
            // 큐에 ( 를 추가한다.
            q.push(OPEN);
            continue;
        }
        
        // 현재 문자열이 닫혀있으면
        // 큐에 마지막 요소가 열려있는지 확인한다
        if(q[q.length-1] === OPEN) {
            // 마지막 요소가 열려있으면 올바른 괄호로 처리한다
            q.pop();
            continue;
        }
        
        // 현재 문자열이 닫혀있고, 큐의 마지막 요소가 닫혀있는 경우
        return false
        
    }

    return !q.length;
}