function solution(nums) {
    const numsSet = new Set(nums)
    return numsSet.size > nums.length / 2 ? nums.length / 2 : numsSet.size
}