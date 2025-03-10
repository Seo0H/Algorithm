function solution(s) {
    const numbers =  s.split(' ').map(Number).sort((a,b) => a-b);
    return `${numbers.at(0)} ${numbers.at(-1)}`;
}