// Hash
// key: genres[i]
// value: [idx(고유번호)]  -> 해당 장르에서 palys가 가장 많은노래의 idx만 상위 2개 표기.
function solution(genres, plays) {
    // genres를 돌며, 장르별 plays 합계 비교 
    const genresCount = genres.reduce((memo, cur, idx) => {
        memo[cur] ? memo[cur] += plays[idx] : memo[cur] = plays[idx];
        return memo;
    },{})

    // genres[idx] : [가장많이 들은 idx, 두번째로많이들은 idx] ( length <= 2)
    const singsCount = genres.reduce((memo, cur, idx) => {
        if (!memo[cur]) memo[cur] = {_1st : idx};
        else if (!memo[cur]._2nd) {
            if(plays[memo[cur]._1st] < plays[idx]){
                memo[cur]._2nd = memo[cur]._1st;
                memo[cur]._1st = idx;
            }
            else memo[cur]._2nd = idx;
        }
        else {
            const { _1st, _2nd } = memo[cur];
            
            // 이번 곡의 재생 횟수가, _1st곡의 재생 횟수와 같은 경우.
            if(plays[idx] === plays[_1st] && plays[idx] > memo[cur]._2nd) memo[cur]._2nd = idx;
            // 이번 곡의 재생 횟수가, 기록된 _1st곡의 재생 횟수보다 많은 경우
            else if(plays[idx] > plays[_1st]) {
                if(plays[_1st] > memo[cur]._2nd) memo[cur]._2nd = _1st;
                memo[cur]._1st = idx;
            }
            // 이번 곡의 재생 횟수가, _2st곡의 재생 횟수와 같은 경우.
            else if(plays[idx] === plays[_2nd] ) memo[cur]._2nd = Math.min(_2nd, idx);
            // 이번 곡의 재생 횟수가, 기록된 _1st곡의 재생 횟수보다는 적지만, _2nd곡보단 많은 경우
            else if(plays[idx] > plays[_2nd]) memo[cur]._2nd = idx;

        } 
         return memo;
    },{})
    
    // hash 에서 value 비교를 하고 바로 key를 가져오는 방법.. 
    const descGenres = Object.entries(genresCount).sort((a,b) => b[1] - a[1]);

    let answer = [];
    descGenres.forEach((e,idx) => {
        const [key] = e;
        answer.push(...Object.values(singsCount[key]))
        })
    
    
    return answer;
}
