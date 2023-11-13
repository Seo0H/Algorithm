function solution(nums) {
    
    const countPocketmon = Object.keys(nums.reduce((acc,cur)=> {
        acc[cur] ? acc[cur] = 1: acc[cur]++;
        return acc }, {})).length;
    
        
    return nums.length/2 < countPocketmon ? Math.floor(nums.length/2) : countPocketmon;
}

// hash
// 1. 각 요소가 몇번 반복되는지 체크한 obj 만들기
// 2. 해당 obj key 개수와 nums.length/2 비교. obj key 개수는 nums.length/2 보다 클 수 없음.