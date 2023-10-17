function solution(number, limit, power) {
    let answer = 0;
    
    for(let i=1; i<=number; i++){
        let count = countDivisor(i);
        answer += count > limit ? power : count; 
    }
    
    return answer;
}

function countDivisor(num){
    const count= new Set();
    for(let i=1; i <= Math.sqrt(num); i++){
       if(num%i === 0) {
           count.add(i);
           count.add(num/i);
       }
    }
    return count.size;
}
