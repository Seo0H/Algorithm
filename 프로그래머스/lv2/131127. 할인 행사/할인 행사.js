function solution(want, number, discount) {
    if(want.filter(val => discount.includes(val)).length === 0 ) return 0;
    let startIdx = 0, endIdx = 10;
    let answer = 0;
    
    while(startIdx < discount.length){
        const discount10days = discount.slice(startIdx,endIdx);
        if(discount10days.length < 10) break;
        
        const cpnum = [...number];
        discount10days.forEach(val => {
            if(want.indexOf(val) > -1) cpnum[want.indexOf(val)]-- 
        })
        
        if(cpnum.find(val => val !== 0) === undefined) answer++;
        
        startIdx++;
        endIdx++;
            
    }
    
    return answer;
}
// 1. want의 원소 중 하나라도 discount 에 없을 경우 -> 0
// 2. discount 배열을 10개 단위로 자르기
// 2-1. 만약 이번에 자를 배열 idx ~ discount.length -1 이 10보다 작으면 계산 중지. answer 리턴
// 3. 잘려진 배열을 number 개수를 카운트하며 비교 -> 주의할 점은 number 깊은복사 해서 봐야 한다는 거..
// 4. 만약 want, number 가 비어졌을 경우 -> answer +1 , 아닐경우 pass

// 10일 이내인거임? 