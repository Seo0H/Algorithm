// 0419 3번째
function solution(participant, completion) {
    const completionCount = completion.reduce((memo,cur) => {
        memo[cur] ? memo[cur]++ : memo[cur] = 1;
        return memo
    },{})
    
    for(let i=0; i<participant.length; i++){
        if(completionCount[participant[i]] > 0) completionCount[participant[i]]-- 
        else return participant[i]
    }
    
}