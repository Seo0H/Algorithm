function solution(participant, completion) {
    const completionMap = completion.reduce((acc,name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc
    }, {})
    
    for ( const name of participant) {
         if (!completionMap[name]) {
             return name;
        }
        
        completionMap[name]--;
    }
        
    return 'not found'
        
}