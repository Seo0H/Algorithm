function solution(arr) {
    let lastNum = -1;
    
    
    return arr.reduce((acc,cur) => {
        if(lastNum === cur) return acc
        
        // 연속된 중복 값이 아닌 경우
        acc.push(cur);
        lastNum = cur;
        return acc
    } ,[]);
}