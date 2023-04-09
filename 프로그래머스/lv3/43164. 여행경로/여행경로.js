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
                if(chk[i] === 0) {
                    const [start, end] = tickets[i];
                    if (path[path.length - 1] === start) {
                        chk[i] = 1;
                        dfs([...path, end]);
                        chk[i] = 0;
                    }
                }
            }
        }
    }
    
    
}