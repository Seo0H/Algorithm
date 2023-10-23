function solution(num, total) {
    let countNum = total;
    
    while(true){
        let thisAnswer = [];
        
        if(!total) {
            let thisNum = Math.floor(num/2);
            for(let i = 0; i < num; i++ ) {
                thisAnswer.push(thisNum--);
            }
        } else thisAnswer = makeArrayContinuousNumber(countNum--);
        
        const sum = thisAnswer.reduce((acc,cur) => acc+cur,0);
        if(sum === total) return thisAnswer.sort((a,b)=> a-b);
    }
    
    return false;
    
    function makeArrayContinuousNumber(thisNum){
        let continuousArr = [];
        
        for(let i=0; i< num; i++){
            continuousArr.push(thisNum--);    
        }
        return continuousArr
    }
}