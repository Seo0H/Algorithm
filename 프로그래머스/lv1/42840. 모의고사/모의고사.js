function solution(answers) {
    const no1 = [1, 2, 3, 4, 5];
    const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5,];
    
    let no1Idx = 0, no2Idx = 0, no3Idx = 0;
    
    let grading = answers.reduce((acc, cur, idx)=>{
        if (no1Idx >= no1.length) no1Idx = 0;
        if (no2Idx >= no2.length) no2Idx = 0;
        if (no3Idx >= no3.length) no3Idx = 0;
        
        no1[no1Idx] === cur ? acc[1]++ : acc;
        no2[no2Idx] === cur ? acc[2]++ : acc;
        no3[no3Idx] === cur ? acc[3]++ : acc;
        
        no1Idx++; no2Idx++; no3Idx++;
        return acc;
    }, {1:0, 2:0, 3:0});
    
    const tmp = Object.entries(grading)
            .sort((a,b) => b[1] - a[1])
            .filter(([i, grad], _, arr) => arr[0][1] === grad )
            .map (([idx]) => +idx)
    
    return tmp;
}