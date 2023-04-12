function solution(participant, completion) {
    const isCompletedHash = completion.reduce((acc,cur) => {
        acc[cur] >= 1 ? acc[cur]++ : acc[cur] = 1;
        return acc;
    }, {});
    for(let i=0; i<participant.length; i++){
        if(!isCompletedHash[participant[i]] || isCompletedHash[participant[i]] === 0) return participant[i];
        isCompletedHash[participant[i]]--;
    }
}
