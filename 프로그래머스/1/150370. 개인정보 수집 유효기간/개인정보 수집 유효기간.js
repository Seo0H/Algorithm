function solution(today, terms, privacies) {
    var answer = [];
    const [year, month, day] = today.split('.').map(el => +el);
    const currentTime = year * 12 * 28 + month * 28 + day;
    
    const termsHash = terms.reduce((acc,cur) => {
        acc.set(cur[0], +cur.slice(2)*28);
        return acc;
    }, new Map())
    
    privacies.forEach((strDateAndTerm, idx) => {
        let [thisDate, thisTerm] = strDateAndTerm.split(' ');
        let [thisYear, thisMonth, thisDay] = thisDate.split('.').map(el => +el);
        const privaciesTime = (thisYear * 12 * 28) + (thisMonth * 28) + thisDay + termsHash.get(thisTerm);
        if(privaciesTime <= currentTime) answer.push(idx+1);
    })
    
    return answer;
}