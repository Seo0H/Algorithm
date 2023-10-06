function solution(k, m, score) {
    var answer = 0;
    
    // 내림차순 정렬
    score.sort((a,b)=> b-a);
    
    // 옵션1. 각 원소가 m개가 되도록 쪼갠 후, 해당 배열을 Math.min으로 검사
    const MaxnumOffruitsInABox = score.length - (score.length % m);
    
    for(let i = m; i <= MaxnumOffruitsInABox ; i += m){
        answer += Math.min(...score.slice(i-m ,i)) * m;
    }
    
    return answer;
}

// 낮은 점수는 낮은 점수끼리
// 높은 점수는 높은 점수끼리
// 옵션2. 순회하며 acc에 m개 만큼 원소를 넣어 비교. 만약 acc에 m개만큼 원소가 채워졌다면 Math.min으로 값 추출