function solution(n, t, m, p) {
    let str = '';
    let answer = '';
    for(let i=0; i < m * t; i++) str += i.toString(n);
    str = str.toUpperCase();
    for(let i=p-1; i<str.length; i += m) answer += str[i]; 
    return answer.slice(0,t);
}