function solution(n, left, right) {
    let answer =[];    
    for(;left<right+1; left++){
        answer.push(Math.max(left%n,parseInt(left/n))+1)
    }
    
    return answer;
}