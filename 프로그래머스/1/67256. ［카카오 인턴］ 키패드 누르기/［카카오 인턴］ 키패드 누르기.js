
function solution(numbers, hand) {
    const numPad = makeNumPad() // 숫자 패드 1이 numPad[0][0]인 좌표를 표시하도록 변환
    const coordinate = { left: numPad.get(9), right: numPad.get(11) }; // * : [3,0] , # : [3,2]
    const answer = numbers.reduce((logs, curNum) => {
        if(/[147]/.test(curNum)) {
            logs += 'L'
            coordinate.left = numPad.get(curNum-1);
        } else if(/[369]/.test(curNum)) {
            logs += 'R';
            coordinate.right = numPad.get(curNum-1)
        } else {
            if(curNum === 0 ) curNum = 11; // 0 보정
            
            const leftDistance = getDistance(coordinate.left , numPad.get(curNum-1));
            const rightDistance = getDistance(coordinate.right , numPad.get(curNum-1));
            
            if(leftDistance < rightDistance){
                logs += 'L'
                coordinate.left = numPad.get(curNum-1)
            } else if (leftDistance > rightDistance){
                logs += 'R'
                coordinate.right = numPad.get(curNum-1)
            } else {
                logs += hand[0].toUpperCase()
                coordinate[hand] = numPad.get(curNum-1)
            }
        }
        
        return logs
    },'');
    
    return answer;
}

function makeNumPad() {
    return  Array
    .from({length: 12}, (_,idx) => ([Math.floor(idx/3), idx%3]))
    .reduce((acc,cur,idx) => {
        acc.set(idx, cur)
        return acc
    },new Map())
}

function getDistance(a, b){
    const x = Math.abs(a[0] - b[0]);
    const y = Math.abs(a[1] - b[1]);
    return x + y
}

// 3 행 4 열 의 좌표, 특수문자는 누르지 않음 => ([3,0] , [3,2] 는 각각 왼손과 오른손의 초깃값 이후로는 사용하지 않음.)
// 이전 손의 위치를 기억할 공간 필요. (다 기억할필요는 없고 전의 위치만)
// 만약 중간 숫자를 누를경우, 왼손과 오른손의 위치와 해당 위치의 거리를 계산해야함.

