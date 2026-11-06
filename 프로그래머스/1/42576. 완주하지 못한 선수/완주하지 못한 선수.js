function solution(participant, completion) {
    const participantMap = participant.reduce((acc,cur) => {
         if(!acc[cur]) {
             acc[cur] = 0;
         }

        acc[cur] += 1;

        return acc
    }, {})
    
    completion.forEach((cur) => { participantMap[cur] -= 1 });
    
    const result = Object.keys(participantMap).find(key => participantMap[key] >= 1);
    
    return result
        
}