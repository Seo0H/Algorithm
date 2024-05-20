function solution(topping) {
    const first = new Map()
    const second = topping.reduce((hash, cur) => {
        hash.set(cur, hash.has(cur) ? hash.get(cur) + 1 : 1)
        return hash
    }, new Map())
    
    return topping.reduce((count,curTopping) => {
        first.set(curTopping, first.has(curTopping) ? first.get(curTopping) + 1 : 1);
        if(second.get(curTopping) - 1 === 0) second.delete(curTopping)
        else second.set(curTopping, second.get(curTopping) - 1)
        if(first.size === second.size) count+=1
        return count
    },0)
    

    
}