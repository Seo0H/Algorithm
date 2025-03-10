function solution(nums) {
    const n = nums.length / 2;
    const ponketmonMap = nums.reduce((acc,cur) => {
        if(acc[cur]){
            acc[cur] += 1;
        } else{
            acc[cur] = 1;
        }
        return acc
    }, {})
    
    const ponketmonTypesCount = Object.keys(ponketmonMap).length
    
    return n > ponketmonTypesCount ? ponketmonTypesCount : n;
}