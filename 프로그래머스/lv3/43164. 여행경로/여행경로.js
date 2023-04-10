function solution(tickets) {
    const answer = [];
    const goal = tickets.length + 1;
    const chk = Array.from({length: tickets.length}, _ => 0);
    dfs(["ICN"]);
    return answer.sort()[0];
    
    function dfs (path){
        if (path.length === goal) answer.push(path)
        else {
            for(const i in tickets) {
                // 방문하지 않았다면
                if(chk[i] === 0) {
                    const [start, end] = tickets[i];
                    // 마지막으로 방문한 곳이 이번 티켓 시작과 같다면
                    if (path[path.length - 1] === start) {
                        // 방문
                        chk[i] = 1;
                        // 다음 위치로 이동.
                        dfs([...path, end]);
                        // 재귀를 탈출했을때 -> 해당 깊이에서 답을 찾지 못했을때 -> 원상복귀.
                        chk[i] = 0;
                    }
                }
            }
        }
    }
}