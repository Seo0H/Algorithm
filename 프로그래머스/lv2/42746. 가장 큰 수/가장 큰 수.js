function solution(numbers) {
    const answer = numbers.sort((a,b)=> (b+''+a) - (a+''+b)).join().replaceAll(',','');
    return answer[0] ==='0' ? '0' : answer;
}