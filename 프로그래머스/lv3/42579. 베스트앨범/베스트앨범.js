function solution(genres, plays) {
    const genresPlayHash = genres.reduce((acc,cur,idx) => {
        acc[cur] ? acc[cur] += plays[idx] : acc[cur] = plays[idx];
        return acc;
    },{});
    const isAddedTwice = {};
    return genres.map((genres,idx) => { return { genre : genres, idx, play: plays[idx]}})
                      .sort((a,b) => {
                          // 장르 판별
                          if(a.genre !== b.genre) return genresPlayHash[b.genre] - genresPlayHash[a.genre];
                          // 재생 노래 횟수 판별
                          if(a.play !== b.play) return b.play - a.play;
                          // 고유 번호 판별
                          return a.idx - b.idx;
                      })
                     .filter(({genre, idx}) => {
                         isAddedTwice[genre] ? isAddedTwice[genre]++ : isAddedTwice[genre] = 1;
                         if(isAddedTwice[genre] > 2) return false;
                         return true;
                     }).map(({idx}) => idx);;
}