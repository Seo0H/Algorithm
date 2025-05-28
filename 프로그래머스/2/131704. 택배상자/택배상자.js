function solution(order) {
    const conveyer = [];
    let answer = 0;
    
    for (let i = 1, j = 0 ; i <= order.length; i++){
        conveyer.push(i)
        
        while(conveyer.length && conveyer.at(-1) === order[j]) {
            conveyer.pop();
            j += 1;
            answer += 1;
        }
    }
    
    return answer
}