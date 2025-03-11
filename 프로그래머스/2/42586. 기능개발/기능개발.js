function solution(progresses, speeds) {
    const answer = [];
    
    while(progresses.length){
        // 개발 속도 별로 작업 진행
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i];
        }
        
        // 선 배포 작업 순서대로 완료된 작업 배포
        let deployedWorkCount = 0;
        while(progresses[0] >= 100){
            progresses.shift();
            speeds.shift();
            deployedWorkCount +=1;
        }
        
        // 만약 배포된 작업이 있다면 답변에 추가
        if(deployedWorkCount) {
            answer.push(deployedWorkCount)
        }
    }
    
    return answer;
}
