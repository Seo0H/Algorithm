function solution(lottos, win_nums) {
    const win_nums_set = new Set(win_nums);
    const { match_count, zero_count } = lottos.reduce((acc,cur) => {
        if(cur === 0 ){
            acc.zero_count += 1;
            return acc
        }
        
        if(win_nums_set.has(cur)) {
            acc.match_count += 1;            
        }
        
        return acc
    }, { match_count : 0, zero_count : 0 });
    
    
    const min_ranking = match_count === 0 ? 6 : Math.abs(match_count - 6) + 1
    
    return [ 
        zero_count === 6 ? 1 : min_ranking - zero_count ,
        min_ranking 
    ]
}