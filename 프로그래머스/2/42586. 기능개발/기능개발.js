function solution(progresses, speeds) {
    var answer = [];
    let i=0;
    while(progresses.length){
        if(progresses[i] < 100) progresses[i] += speeds[i];
        i++;
        
        if(i >= progresses.length) {
            i=0;
            let cnt = 0;
            while(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                cnt++;
            }
            if(cnt > 0) answer.push(cnt)
        };
    }
    return answer;
}

// 1. progresses 배열을 순회하며 각 요소와 해당 요소에 idx에 해당하는 speeds 요소를 더한다.
// 2. idx가 0이고 해당 요소가 100일 경우, 앞에서부터 요소의 값이 100 이상인 값들을 제거한다.
// 3. 제거 중 100 미만 요소가 있을 경우 멈추고, 다시 1로 돌아간다.