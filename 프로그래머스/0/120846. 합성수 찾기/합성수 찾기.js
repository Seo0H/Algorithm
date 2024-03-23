function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++){
        if(!isPrime(i) && i !==1){
            answer++
        }
    }
    
    return answer;
}

function isPrime(number){
    if(number === 1) return false;
    
    for(let i=2; i <= Math.sqrt(number); i++){
        if(number%i === 0) return false
    }
    
    return true
}