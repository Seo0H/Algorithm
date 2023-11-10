function solution(n, t, m, p) {
    let a = '';
    let answer = '';
    
    for(let i=0; i < m * t; i++){
        a += i.toString(n);
    }
    
    a = a.toUpperCase();
    
    
    for(let i=p-1; i<a.length; i += m){
        answer += a[i];
    }
    
    return answer.slice(0,t);
}

// N진법으로 +1 이 되는 로직을 어떻게 구현 할 건지?
// 1. 0부터 m * t 까지의 수를 각각 n진법으로 변환한 숫자를 string인 변수 a에 합친다.
// 2  a[p-1] 부터 p-1 + m 을 반복 idx의 요소를 추출한다. 