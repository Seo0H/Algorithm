// 0413
function solution(participant, completion) {
    const completerMemo = completion.reduce((memo, cur) =>{
        memo[cur] ? memo[cur]++ : memo[cur] = 1;
        return memo
    },{})
    for(let i=0; i<participant.length; i++){
        if(!completerMemo[participant[i]]) return participant[i];
        completerMemo[participant[i]]--;
    }
}