function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a,b)=> b-a);
    
    const MaxnumOffruitsInABox = score.length - (score.length % m);
    
    for(let i = m; i <= MaxnumOffruitsInABox ; i += m){
        answer += Math.min(...score.slice(i-m ,i)) * m;
    }
    
    return answer;
}

