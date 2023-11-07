function solution(operations) {
    var answer = [];
    const q = [];
    
    operations.forEach((e) => {
        if(e[0] === 'I'){
            q.push(Number(e.split(' ')[1]));
            q.sort((a,b) => b - a);
        }else if(e[0] === 'D'){
            if(e === 'D 1') q.shift()
            else if(e === 'D -1') q.pop();
        }
    })
    
    return !q.length ? [0,0] : [q[0], q.at(-1)];
}

// 1. 문자열 처리를 한다. I인 경우, D인 경우 나누어 로직을 분리한다.
// 2. 첫 글자가 I인 경우 I를 제거하고 Number으로 형변환을 한 후 a에 할당한다. 해당 숫자를 큐에 주어진 숫자를 삽입한다 
//      -> 이 경우 숫자가 너무 크다면? str로 저장하는 걸 고려해야 할 듯.
// 2-1. q에 a를 삽입 후 sorting 내림차순으로 한다.
// 3. 첫 글자가 D인 경우, 후의 오는 글자가 1이면 q.shift(), -1이면 q.pop()한다. -> 비어있는 q에 해도 별 상관 없음.
// 4. operations를 순회 후 q의 길이가 0이면 [0,0], 1 이상이면 q[0], q.at(-1)을 배열에 담아 return 한다. 