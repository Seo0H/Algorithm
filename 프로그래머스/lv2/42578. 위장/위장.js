function solution(clothes) {
    const kind = Object.values(clothes.reduce((acc,[_, kind]) => {
        acc[kind] ? acc[kind]++ : acc[kind] = 1;
        return acc
    } , {}))
    
    return kind.reduce((acc,cur) => acc*=(cur+1),1)-1;
}