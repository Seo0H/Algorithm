function solution(clothes) {    
    return Object.values(clothes.reduce((acc,cur) => {
        acc[cur[1]] ? acc[cur[1]]++ : acc[cur[1]] = 1;
        return acc;
    },{})).reduce((a,b)=> a*(b+1), 1)-1;  
}