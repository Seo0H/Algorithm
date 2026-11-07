function solution(clothes) {
    const clothesMap = clothes.reduce((acc, [,kind]) => {
        acc.has(kind) ? acc.set(kind, acc.get(kind) + 1)  : acc.set(kind, 1);
        return acc
    }, new Map())
    
    return [...clothesMap.values()].reduce((acc,cur) => acc * (cur + 1), 1) - 1
}