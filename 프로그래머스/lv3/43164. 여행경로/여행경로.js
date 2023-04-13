function solution(tickets) {
    const answer = []
    const visitied = Array.from({length : tickets.length}, _ => false)
    DFS(['ICN']);
    return answer.sort()[0];
    
    function DFS(path){
    if (path.length === tickets.length + 1) {
        answer.push(path);
    } else {
        tickets.forEach((e,idx) => {
            const [departure, arrival] = e;
            if(!visitied[idx] && departure === path[path.length - 1]) {
                visitied[idx] = true;
                DFS([...path, arrival])
                visitied[idx] = false;
                };
            })
        }
    }
}


