function solution(tickets) {
    let answer = [];
    bfs(['ICN'], Array.from({length: tickets.length}, _=> false));
    return answer.sort()[0];
    
    function bfs(fixed, visited){
        if(fixed.length >= tickets.length+1){
            fixed.length === tickets.length+1 ? answer.push(fixed) : answer;
            return;
        }
        for(let i=0; i<tickets.length; i++){
            if(!visited[i] && tickets[i][0] === fixed[fixed.length-1]){
                visited[i] = true;
                bfs([...fixed,tickets[i][1]], visited);
                visited[i] = false;
            }
        }
    }
    
}

// bfs 