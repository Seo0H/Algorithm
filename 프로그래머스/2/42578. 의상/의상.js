function solution(clothes) {
    const clothesMap = clothes.reduce((acc, [,kind]) => {
        acc[kind] ??= 0;
        acc[kind]++;
        return acc
    }, {})
    
    return Object.values(clothesMap).reduce((acc,cur) => acc * (cur + 1), 1) - 1
}