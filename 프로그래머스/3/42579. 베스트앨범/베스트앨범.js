function solution(genres, plays) {

     const cal = genres.reduce((acc,cur,idx) => {
        if(!acc[cur]) {
            acc[cur] = [idx];
            return acc;
        }
        acc[cur].push(idx)
        acc[cur].sort((a,b) => plays[b] - plays[a]);
        return acc;
    }, {})
     
    return Object.entries(genres.reduce((acc, cur, idx)=>{
        acc[cur] ? acc[cur] += plays[idx] : acc[cur] = plays[idx]
        return acc
    },{})).sort((a,b) => b[1]-a[1]).reduce((acc, cur) => {
        return [...acc, ...cal[cur[0]].slice(0,2)]
    },[])
}

// 장르 플레이 총 합이 큰거 부터 > 장르 내 노래 2개 > 고유번호 하
// 고유번호는 인덱스로 구별
