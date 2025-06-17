function solution(nums) {
    const uniqNumsCount = [...new Set(nums)].length;
    const targetCount = nums.length / 2;
    
    return uniqNumsCount < targetCount ? uniqNumsCount : targetCount
}