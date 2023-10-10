function solution(new_id) {
    let answer =''
    
    const stap2Regx = /[^\w-_\.]/g;
    const selectRepeatDot = /\.+/g;
    const selectFirstLastDot = /\.+$|^\.+/g;
    
    // step 1~4
    answer = new_id.toLowerCase()
        .replaceAll(stap2Regx,'')
        .replaceAll(selectRepeatDot, '.')
        .replaceAll(selectFirstLastDot,'');
    
    // step 5
    answer = answer === '' ? 'a' : answer;
    
    // step 6
    answer = answer.length >= 16 ? answer.slice(0,15).replaceAll(selectFirstLastDot,'') : answer;
    
    // step 7
    answer = answer.length <= 2 ? answer + answer.at(-1).repeat(3 - answer.length) : answer;

    return answer;
}