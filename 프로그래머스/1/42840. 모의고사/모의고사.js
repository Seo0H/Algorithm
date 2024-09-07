// patterns
const no1 = [1, 2, 3, 4, 5];
const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
function solution(answers) {
    let [no1Idx, no2Idx, no3Idx] = Array.from({length:3}, () => 0);
    
    const resultMap = answers.reduce((memo,testAnswer,idx) => {
        if(no1Idx >= no1.length){
            no1Idx = 0;
        }
        if(no2Idx >= no2.length){
            no2Idx = 0;
        }
        if(no3Idx >= no3.length){
            no3Idx = 0;
        }
        
        const abandonersAnswers = [null, no1[no1Idx++], no2[no2Idx++], no3[no3Idx++]];
        
        const abandonerCorrectAnswersIdxs = abandonersAnswers.reduce((acc,answer,idx) => {
            if(answer === testAnswer){
                acc.push(idx)
            }
            return acc
        },[]);
        
        abandonerCorrectAnswersIdxs.forEach((idx) => {
            memo[idx]+=1
        })
        
        return memo
    }, { 1:0, 2:0, 3:0 })
    
    const sorted = Object.entries(resultMap).sort(([,aScore],[,bScore]) => bScore - aScore );
    const answer = [Number(sorted[0][0])];
    
    for(let i=1; i<sorted.length; i++){
        const [biggerNo, biggerScore] = sorted[i-1];
        const [curNo, curScore] = sorted[i];
        
        if(biggerScore === curScore){
            answer.push(Number(curNo));
        } else break
    }
    
    return answer;
}

// 1번 수포자 : 1, 2, 3, 4, 5
// 2번 수포자 : 2, 1, 2, 3, 2, 4, 2, 5
// 3번 수포자 : 3, 3, 1, 1, 2, 2, 4, 4, 5, 5

// 어떻게 가장 높은 점수를 받은 것을 알 수 있을지?
// 1. entry 돌린 후 sort(맞은 값 기준) 한다
// 2. 