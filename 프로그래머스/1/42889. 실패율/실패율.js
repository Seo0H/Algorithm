function solution(N, stages) {
    let sum = 0;
    
    const a = stages.reduce((acc,cur) => {
        acc[cur-1] ? acc[cur-1]++ : acc[cur-1] = 1; 
        sum++;
        return acc;
    }, Array.from({length:N+1}, ()=>0));
    
    
    
    
    const b = a.reduce((acc,cur,idx) => {
        acc[idx][0] = cur/sum;
        sum -= cur;
        return acc;
    }, Array.from({length:N+1}, (_,idx)=> [0, idx+1]));
    
    b.pop();
    
    return b.sort((a,b) => b[0] - a[0]).map((cur) => cur[1]);

}

// 1. 스테이지의 크기의 배열 a. 각 스테이지를 해당 배열의 idx+1로 보고, 스테이지에 멈춰있는 참가자 수 표기
// 이때, 배열 idx + 1  해당 스테이지를 나타냄. stage의시작은 1이기때문.
// 2. a의 전체 합 m을 구한다. 이 합은 전체 참가자를 의미.
// 3. a를 순회하며, 각 스테이지의 실패율이 담긴 배열 b를 만든다.
//      b는 [실패율, 스테이지 번호] 로 이루어진 2차원 배열이며, 스테이지 번호는 해당 idx+1이다.
//      이때 순회는 오름차순으로 진행하며 스테이지에 도달한 플레이어 수는 m이다.
//      순회할때마다 이전 idx의 요소를 m에서 뺀다.
// 4. b를 실패율 기준으로 내림차순 sorting을 한다
// 5. b의 스테이지 번호를 이용해 순서대로 배열을 만들어 return한다.