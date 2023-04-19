function solution(answers) {
    const answer =[];
    const _1 = [1, 2, 3, 4, 5];
    const _2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const _3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const _1grade = answers.filter((answer,idx) => _1[idx%_1.length] === answer).length;
    const _2grade = answers.filter((answer,idx) => _2[idx%_2.length] === answer).length;
    const _3grade = answers.filter((answer,idx) => _3[idx%_3.length] === answer).length;
    const max = Math.max(_1grade, _2grade, _3grade );
    
    if(max === _1grade) answer.push(1);
    if(max === _2grade) answer.push(2);
    if(max === _3grade) answer.push(3);
    
    return answer;

}