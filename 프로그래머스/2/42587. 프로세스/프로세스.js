function solution(priorities, location) {
    let answer = 0;
    const q = priorities.map((el,idx)=> ([el,idx]));
    
    while(q.length){
        if(q.every(el => q[0][0] >= el[0])){
            answer++;
            const [el, idx] = q.shift();
            if(idx === location){
                return answer;
            }
        }else{
            q.push(q.shift());
        }
    }
    
    return answer;
}