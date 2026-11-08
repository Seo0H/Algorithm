function solution(genres, plays) {
    // 장르별 총 재생횟수 계산
    // 장르별로 가장 많이 재생된 노래 두개 고유번호 추출
    const musicInfoMap = genres.reduce((musicInfoAcc, genre, curUid) => {
        let musicInfo;
        
        // 기록된 장르가 없는 경우
        if(!(musicInfoAcc.has(genre))){
            musicInfo = {
                totalPlays : plays[curUid],
                uids : [curUid]
            }
            musicInfoAcc.set(genre, musicInfo);

            return musicInfoAcc
        }
        
        // 기록된 장르가 있는 경우
        musicInfo = musicInfoAcc.get(genre);
        musicInfo.totalPlays += plays[curUid];
        
        const [bigger, smaller] = musicInfo.uids.map(id => plays[id]);
        const curPlayCount = plays[curUid];
        
        if(!smaller) {
            musicInfo.uids.push(curUid);
            musicInfo.uids.sort((a,b) => plays[b] - plays[a]);
            
            return musicInfoAcc
        }
        
        if(curPlayCount > bigger) {
            musicInfo.uids.unshift(curUid);
            musicInfo.uids.pop();
            musicInfoAcc.set(genre, musicInfo);
            
            return musicInfoAcc
        }
        
        if(curPlayCount > smaller) {
            musicInfo.uids.splice(1, 1, curUid);
            musicInfoAcc.set(genre, musicInfo);
            
            return musicInfoAcc
        }
        
        return musicInfoAcc
    }, new Map());
    
    return [...musicInfoMap.entries()]
        .sort(([,a],[,b]) => b.totalPlays - a.totalPlays)
        .map(([,{ uids }]) => uids).flat();
    
}