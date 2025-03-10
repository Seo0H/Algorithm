function solution(nums) {
    const n = nums.length / 2;
    const uniqPonketmons = [...new Set(nums)]
    
    return n > uniqPonketmons.length ? uniqPonketmons.length : n;
}