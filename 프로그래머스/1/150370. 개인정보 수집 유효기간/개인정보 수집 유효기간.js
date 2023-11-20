function solution(today, terms, privacies) {
    let answer = [];
    
    today = today.split('.').map(el => +el);
    
    terms = terms.reduce((acc,cur) => {
        acc[cur[0]] = +cur.slice(2);
        return acc
    }, {});
    
    privacies.forEach((cur,idx) => {
        let [privacieDate, termType] = cur.split(' ');
        privacieDate = addDate(privacieDate, terms[termType]);

        if(today[0] > privacieDate[0]) answer.push(idx+1)
        else if (today[0] === privacieDate[0] && today[1] > privacieDate[1]) answer.push(idx+1)
        else if (today[0] === privacieDate[0] 
                 && today[1] === privacieDate[1] 
                 &&  today[2] > privacieDate[2]) answer.push(idx+1)
    })
    
    return answer;
}

// date - String, 2021.05.02
// return number[] [year,month,date]
function addDate(date, addMonth){
    let [year, month, day] = date.split('.').map(el => +el);
     
    month += addMonth; // 11+13 24
    day--; // 2
    
    if(day === 0) {
        month--;
        day = 28;
    }
    
    if(month > 12){
        year += Math.floor(month/12); // 2010
        month %= 12 ; 
    }
    
    if(month === 0){
        year--;
        month = 12;
    }
    
    return [year, month, day];
}


// Date 객체를 이용해 비교할 수 있음
// 1. today를 Date로 parsing 한 값을 today에 저장한다
// 2. terms를 hash화 한다. 
// 2. privacies를 순회하며 각 요소 privacie 문자열 처리를 한다.
//  2-1. privacie를 공백 기준으로 자른다 [가입날짜, term] 형식
//  2-3. '가입날짜'를 Date 객체를 이용해 parsing 해 privacie 변수에 할당한다.
//  2-4. privacie 변수에 terms[term]*28 을 더한다.
//  2-5. today와 비교한다. 만약 today 보다 해당 날짜가 크다면 answer.push() 한다.
