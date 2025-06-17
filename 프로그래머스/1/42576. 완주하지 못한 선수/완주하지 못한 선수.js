function solution(participant, completion) {
    const completionMap = completion.reduce((nameMap,cur) => {
        nameMap.set(cur, nameMap.has(cur) ? nameMap.get(cur) + 1 : 1 )
        return nameMap
    }, new Map());

    for(const participantName of participant){
        if(completionMap.has(participantName) === false) {
            return participantName
        }
        
        completionMap.set(participantName, completionMap.get(participantName) - 1)
    }
    
    return [...completionMap].filter(([name, count]) => count < 0).at(0).at(0)
}