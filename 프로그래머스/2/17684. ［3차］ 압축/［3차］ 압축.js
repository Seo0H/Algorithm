function solution(msg) {
    var answer = [];
    const a = []; // start idx 0 = 27
    for(let i=0; i<msg.length; i++){
        let isAdded = false;

        for(let aIdx = a.length-1; aIdx >= 0 ; aIdx--){
            // console.log(a[aIdx][0] === msg[i] , a, a[aIdx], i, msg.slice(i, i+a[aIdx].length))
            if(a[aIdx][0] === msg[i] && a[aIdx] === msg.slice(i, i+a[aIdx].length)){ // 둘이 같은 글자라면
                answer.push(aIdx + 27);
                if(msg[a[aIdx].length + 1]) a.push(msg.slice(i, i+a[aIdx].length + 1)) // 현재 순회중인 msg가 단어의 끝이 아니라면 a에 값 추가
                isAdded = true;
                i += a[aIdx].length-1;
                break;
            }
        }
        
        if(!isAdded){
            answer.push(msg.charCodeAt(i) - 64);
            a.push(msg[i] + msg[i+1]); // 사전추가로직    
        }
    }
    
    return answer;
}

// UTF-16 A 65 , B 67 .. 나중에 64빼서 계산하기
// 1. 사전 추가되는 배열 A을 만들고, 해당 배열 우선 탐색. 
//     배열의 끝일수록 긴 문자가 들어감. (최근에 입력한) 끝부터 탐색. 
// 2. A를 탐색 후에도 매치되는 글자가 없으면 영문자 1글자로 판단. 해당 문자 번호 - 64 answer push
