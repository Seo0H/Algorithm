function solution(phone_book) {
    phone_book.sort();
    
    for(let idx = 1; idx < phone_book.length; idx++) {
        if(phone_book[idx].startsWith(phone_book[idx - 1])){
            return false
        }
    }
    
    return true
}