function solution(want, number, discount) {
    if(want.filter(val => discount.includes(val)).length === 0 ) return 0;
    let startIdx = 0, endIdx = 10;
    let answer = 0;
    
    while(endIdx <= discount.length){
        const discount10days = discount.slice(startIdx,endIdx);
        const cpnum = [...number];
        
        discount10days.forEach(val => {
            if(want.indexOf(val) > -1) cpnum[want.indexOf(val)]-- 
        })
        
        if(cpnum.find(val => val !== 0) === undefined) answer++;
        
        startIdx++;
        endIdx++;
    }
    
    return answer;
}
