function solution(babbling) {
    return babbling.reduce((counts, cur) => {
        let beforeStr = ''
        while(cur.length > 0){
            const curStr = getCurStr(cur)
            if(!curStr || beforeStr === curStr) break
            beforeStr = curStr
            cur = cur.slice(curStr.length)
        }
        
        return cur === '' ? counts+1 : counts
    }, 0)
}
              

function getCurStr(str) {
    const isAya = str[0] === 'a' && str[1] === 'y' && str[2] === 'a'
    const isYe = str[0] === 'y' && str[1] === 'e'
    const isWoo =  str[0] === 'w' && str[1] === 'o' && str[2] === 'o'
    const isMa = str[0] === 'm' && str[1] === 'a'
    
    return  isAya ? 'aya' : isYe ? 'ye' : isWoo ? 'woo' : isMa ? 'ma' : false
}