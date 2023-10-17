function solution(n, m, section) {
    var answer = 0;
    let paintedBound=-1;
    
    for(let i =0; i<section.length; i++){
        if(paintedBound >= section[i]) continue;
        paintedBound = section[i] + m - 1;
        answer++;
    }
    
    return answer;
}