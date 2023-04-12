function solution(participant, completion) {
    const isCompletedHash = completion.reduce((acc,cur) => {
        acc[cur] >= 1 ? acc[cur]++ : acc[cur] = 1; ;
        return acc;
    }, {});
    
    for(let i=0; i<participant.length; i++){
        if(isCompletedHash[participant[i]] === undefined || isCompletedHash[participant[i]] === 0) return participant[i];
        isCompletedHash[participant[i]]--;
    }
    
    
}

// function solution(participant, completion) {
//     while(participant.length > 1){
//         const runner = completion.shift();
//         const completedIdx = participant.indexOf(runner);
//         if(completedIdx >= 0) participant.splice(completedIdx, completedIdx+1);
//     }
//     return participant[0];
// }