function solution(m, n, puddles) {
    let dp =  Array.from(Array(n+1), () => Array(m+1).fill(0));
    
    const puddlesSet = puddles.reduce((acc,[m, n]) => {
        acc.add(`${n-1}_${m-1}`)
        return acc
    }, new Set());

    dp[0][0] = 1;
    
    for(let y = 0 ; y < n; y++){
        for(let x = 0; x < m ; x++){
            if(y === 0 && x === 0 ) continue
            
            if(puddlesSet.has(`${y}_${x}`)){
                continue
            }
            
            const upCnt = y > 0 ? dp[y-1][x] : 0;
            const leftCnt = x > 0 ? dp[y][x-1] : 0;
            
            dp[y][x] = (upCnt + leftCnt) % 1_000_000_007
        }
    }
    
    
    return dp[n-1][m-1];
}