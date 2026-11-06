function solution(phone_book) {
    return !phone_book.sort().some((num, idx, arr) => {
        if(idx === phone_book.lenght - 1) return false
        return arr[idx + 1]?.startsWith(num);
    })
}