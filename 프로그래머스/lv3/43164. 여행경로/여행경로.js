function solution(tickets) {
    const answer = []
    const visitied = Array.from({length : tickets.length}, _ => false)
    bfs(['ICN']);
    return answer.sort()[0];
    
    function bfs(path){
    if (path.length === tickets.length + 1) {
        answer.push(path);
    } else {
        tickets.forEach((e,idx) => {
            const [departure, arrival] = e;
            if(!visitied[idx] && departure === path[path.length - 1]) {
                visitied[idx] = true;
                bfs([...path, arrival])
                visitied[idx] = false;
                };
            })
        }
    }
}


