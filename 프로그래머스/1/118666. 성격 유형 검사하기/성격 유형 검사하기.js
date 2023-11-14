function solution(survey, choices) {
  
    const check = survey.reduce((acc,cur,idx)=>{
        if(choices[idx] < 4) {
            const hasValue = acc.get(cur[0])
            if(hasValue) acc.set(cur[0], hasValue+Math.abs(choices[idx]-4));
            else acc.set(cur[0], Math.abs(choices[idx]-4));
        } else if(choices[idx] > 4) {
            const hasValue = acc.get(cur[1]);
            if(hasValue) acc.set(cur[1], hasValue+choices[idx]-4);
            else acc.set(cur[1], choices[idx]-4);
        }
        return acc;
    }, new Map)
   

    return [    {R: check.get('R') ?? 0, T: check.get('T') ?? 0},
                {C: check.get('C') ?? 0, F: check.get('F') ?? 0},
                {J: check.get('J') ?? 0, M: check.get('M') ?? 0},
                {A: check.get('A') ?? 0, N: check.get('N') ?? 0}
            ].reduce((acc,cur) => {
                const keys = Object.keys(cur);
                const values = Object.values(cur);
                
                if(values[0] === values[1]) acc += keys.sort()[0]
                else if(values[0] < values[1]) acc += keys[1]
                else acc+=keys[0]
        
                return acc;
            }, '');
}

// 0. 1~3 -> servey[i][0] , 5~7 -> servey[i][1]
// 1. 일단 각각의 유형별 점수 체크한 MAP OBJ A
// 2. MAP OBJ를 -> [{R,N}, {C,F}, {J,M}, {A,N}] 배열B 로 변환.
// 3. B의 각 요소 순회하며 유형 표기