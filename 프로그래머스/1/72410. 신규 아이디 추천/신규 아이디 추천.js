function solution(new_id) {
    let answer =''
    
    const selectUnacceptableChar = /[^\w-_\.]/g;
    const selectRepeatDot = /\.+/g;
    const selectFirstLastDot = /\.+$|^\.+/g;
    const selectFullEmty = /^$/g;
    
    answer = new_id.toLowerCase()
        .replaceAll(selectUnacceptableChar,'')
        .replaceAll(selectRepeatDot, '.')
        .replaceAll(selectFirstLastDot,'')
        .replaceAll(selectFullEmty,'a')
        .slice(0,15)
        .replaceAll(selectFirstLastDot,'');
    
    return answer.padEnd(3, answer.at(-1));
}