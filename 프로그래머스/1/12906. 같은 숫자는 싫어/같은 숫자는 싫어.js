function solution(arr) {
    return arr.filter((cur,index) => cur !== arr[index+1])
}