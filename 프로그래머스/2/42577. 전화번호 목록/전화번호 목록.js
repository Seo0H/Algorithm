function solution(phoneBook) {
    phoneBook.sort();
    
    const isPrefix = phoneBook.some((number,idx)=>{
        return phoneBook[idx+1]?.indexOf(number) === 0
    })
    
    return !isPrefix;
}

