function solution(sizes) {
    // w, h 중 더 큰쪽이 rotatedSize[i][0] 에 위치하도록 정렬
    const rotatedSize = sizes.reduce((acc, [w, h]) => {
        acc.push([Math.max(w,h), Math.min(w,h)])
        return acc
    } ,[]);
    
    const walletSize = rotatedSize.reduce((acc, [ w, h]) => {
        if(acc.w < w) {
            acc.w = w
        }
        
        if(acc.h < h){
            acc.h = h
        }
        
        return acc
    }, { w : 0, h: 0 })
    
    return walletSize.w * walletSize.h
}