function solution(participant, completion) {
    // 완료자 체크 맵, 동명이인일 경우를 위해 완료자 횟수로 체크
    const completionMap = completion.reduce((acc,cur) => {
        if(acc[cur]){
            acc[cur] += 1;
        } else {
            acc[cur] = 1;
        }
        
        return acc
    }, {})

    for(let i=0; i < participant.length ; i++){
        // 현재 참가자
        const curParticipant = participant[i];
        
        // 만약 현재 참가자가 완료 명단에 있을 경우,
        if(completionMap[curParticipant]) {
            completionMap[curParticipant] -= 1;
            continue;
        }
        
        return curParticipant
    }
}