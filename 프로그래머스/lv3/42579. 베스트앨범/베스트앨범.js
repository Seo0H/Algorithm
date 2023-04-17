function solution(genres, plays) {
    const genresCount = genres.reduce((memo, cur, idx) => {
        memo[cur] ? memo[cur] += plays[idx] : memo[cur] = plays[idx];
        return memo;
    },{})

    var dupDic = {};    
    return genres.map((t,i)=> ({genre : t, count:plays[i] , index:i}))
        .sort((a,b)=>{
        // 장르가 다르고 재생횟수가 큰 경우 내림차순 정렬
        if(a.genre !== b.genre) return genresCount[b.genre] - genresCount[a.genre];
        // 장르가 같고 재생횟수가 큰 경우 내림차순 정렬
        if(a.count !== b.count) return b.count - a.count;
        // 장르가 같고 재생횟수가 같은 경우 인덱스를 기준으로 오름차순 정렬
               return a.index - b.index;
           })
        .filter(t =>  {
        // 상위 2개만 카운트
        if(dupDic[t.genre] >= 2) return false;
        dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
        return true;
            })
        .map(t=> t.index); 
}