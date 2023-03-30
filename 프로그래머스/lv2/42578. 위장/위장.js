function solution(clothes) {
    let answer = 1;
    
    const clothesCategory = Object.values(clothes.reduce((acc,cur) => {
        acc[cur[1]] ? acc[cur[1]]++ : acc[cur[1]] = 1; 
        return acc;
    },{}))
    clothesCategory.forEach(e => answer *= e+1)
    return answer - 1;
}