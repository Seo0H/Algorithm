function solution(progresses, speeds) {
    const answer = [];
    // 반복문으로 progresses[i] + speeds[i] 실행. 만약 100이 되면 대기.
    // 만약 progresses 가장 앞에 있는 요소가 100이 되면 배포.
    // 이 경우 만약 뒤에 있는 요소들이 연속으로 100이 될 경우 다같이 배포.
    // 쭉 보내다가 만약 100이 아닌 요소를 만나면 다시 반복문 돌려서 더하기..
    
    while(progresses.length > 0){
        for(let i = 0; i< progresses.length; i++)
            if(progresses[i] < 100) progresses[i] += speeds[i];
        
        if(progresses[0] >= 100) distribution();
    }
    
    return answer;
    
    function distribution(){
        let count = 0;
        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            count++;
        }
        answer.push(count);
    }
    

}

