function solution(clothes) {    
    return Object.values(clothes.reduce((acc,[_,kind]) => {
        acc[kind] ? acc[kind]++ : acc[kind]=1;
        return acc
    },{})).reduce((acc,cur) => acc*(cur+1),1)-1;
}