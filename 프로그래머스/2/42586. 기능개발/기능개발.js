function solution(progresses, speeds) {
    const answer = [];
    const dayLeft = progresses.map((progress, i) => 
                                   Math.ceil((100 - progress) / speeds[i]));
    // 반복문에서 사용하는 전역 변수
    let deployDay = dayLeft[0];
    let count = 1;
    
    for(let i = 1; i < progresses.length ; i++){
        // 앞선 작업보다 뒤의 작업이 걸리는 기간이 더 적으면 같이 배포
        if(deployDay >= dayLeft[i]){
            count += 1;
            continue
        }
        
        answer.push(count);
        deployDay = dayLeft[i];
        count = 1;
    }
    
    answer.push(count);
    
    return answer;
}