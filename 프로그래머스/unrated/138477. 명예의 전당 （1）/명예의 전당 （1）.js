function solution(k, scores) {
    const 명예의전당 = [];
    const answer = scores.reduce((acc,score)=>{
        if(명예의전당.length < k) {
            //명예의전당 배열이 명예의전당 길이 k보다 작으면
            // 현재 score을 배열에 넣는다.
            명예의전당.push(score)
        }else{
            // 명예의전당 배열이 k일 경우,
            // 명예의전당 요소 중 score의 값보다 작은 요소를 
            // score으로 바꾼다
            const changeIdx = 명예의전당.findIndex(el => el < score);
            if(changeIdx !== -1) 명예의전당[changeIdx] = score;
        }
        
        명예의전당.sort((a,b) => a-b)
        acc.push(명예의전당[0])
        
        return acc;
    },[])
    
    return answer;
}
