// 0419 
function solution(answers) {
    const no1 = [1, 2, 3, 4, 5];
    const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,];
    
    let grading = answers.reduce((acc, cur, idx)=>{
        no1[idx%no1.length] === cur ? acc[1]++ : acc;
        no2[idx%no2.length] === cur ? acc[2]++ : acc;
        no3[idx%no3.length] === cur ? acc[3]++ : acc;
        return acc;
    }, {1:0, 2:0, 3:0});
    
    const tmp = Object.entries(grading)
            .sort((a,b) => b[1] - a[1])
            .filter(([i, grad], _, arr) => arr[0][1] === grad )
            .map (([idx]) => +idx)
    
    return tmp;
}