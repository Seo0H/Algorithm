function solution(queue1, queue2) {
    let sumQ1 = queue1.reduce((acc,cur) => acc + cur,0)
    let sumQ2 = queue2.reduce((acc,cur) => acc + cur,0);
    
    if((sumQ1 + sumQ2)%2 === 1) return -1
    
    const len = queue1.length;
    const maxLoop = (len+len)*2;
    let [q1idx, q2idx]= [0,0];
    
    for(let i=0; i<maxLoop; i++){
        if(sumQ1 === sumQ2) return i;
        
        if(sumQ1 > sumQ2){
            const popQ1Val = queue1[q1idx++];
            queue2.push(popQ1Val);
            sumQ2 += popQ1Val;
            sumQ1 -= popQ1Val;
            continue;
        } 
        
        if(sumQ1 < sumQ2){
            const popQ2Val = queue2[q2idx++];
            queue1.push(popQ2Val);
            sumQ1 += popQ2Val;
            sumQ2 -= popQ2Val;
            continue;
        }
    }
    
    return -1;
}

// 큐1 , 큐2 의 값을 더한 각각의 변수 -> sumQ1, sumQ2
// sum.. 변수가 더 큰 쪽에서 더 작은쪽으로 무조건 보내야 함
// 아무리 작업해도 안되는 경우는 어떻게 측정할건지 - 큐의 길이 ^ 2
// (signal: aborted (core dumped)) -> 산술 오버플로우 발생 -> Big int 안먹힘