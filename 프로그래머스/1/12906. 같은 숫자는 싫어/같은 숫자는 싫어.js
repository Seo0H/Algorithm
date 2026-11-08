function solution(arr) {
    return arr.filter((cur, idx, array) => cur !== array[idx - 1])
}