function solution(n, k) {
    return n.toString(k).split('0').filter((cur) => isPrime(Number(cur))).length;;
}

function isPrime(num){
    if(num <= 1) return false;
    for(let i=2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

// 1. parseInt를 이용해 n을 k진수로 변환
// 2. 해당 문자열 검사
//      1. 해당 숫자 자체가 10진법으로 봤을때 소수인가? -> 1
//      2. 0을 기준으로 나누어지는 숫자가 소수인가? splice를 0기준으로 해서 소수 검사.

