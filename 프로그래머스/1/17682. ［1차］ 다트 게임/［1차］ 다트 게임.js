function solution(dartResult) {
    const strArr = dartResult.match(/(\d+.*?)(?=\d|$)/g);
    const bonus = {
        'S': (score) => score,
        'D': (score) => score**2,
        'T': (score) => score**3
    };
    
    const option = {
        '*' : (score, arr, beforIdx) => {
            if(arr[beforIdx]) arr[beforIdx] = arr[beforIdx]*2;
            return score*2;
        },
        '#' : (score) => -score,
    };
    
    return strArr.reduce((acc,cur,idx)=>{
        let num = Number.parseInt(cur);
        let score = bonus[cur[num.toString().length]](num);
        
        if(cur[2] && option[cur[2]])
            score = option[cur[2]](score, acc, idx-1)
        
        acc.push(score);
        return acc;
    },[]).reduce((acc,cur) => acc+cur,0);
}
