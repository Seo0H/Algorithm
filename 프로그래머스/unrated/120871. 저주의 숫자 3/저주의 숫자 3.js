function solution(n) {
    let answer = 0;
    
    for(let i=1; i<=n ; i++){
        answer = make3xDight(++answer)
    }
    
    return answer;
}

function make3xDight(num){
    if(num.toString().includes('3')){
        const strAnswer = num.toString();
        const digit = strAnswer.length;
        const idxOf3 = num.toString().indexOf('3') + 1;
        
        num += Number('1' + '0'.repeat(digit - idxOf3))
    }
    
    if(num%3 === 0) num++;
    
    if(num % 3 !== 0 && num.toString().includes('3') === false) return num;
    else num = make3xDight(num);
    
    return num;
}