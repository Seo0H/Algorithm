function solution(tickets) {
    let answer = []
    tickets.sort();
    const visited = Array.from({ length:tickets.length }, () => false);
    dfs(['ICN'], visited);
    return answer[0];
    
    function dfs(arr){
        if(arr.length >= tickets.length + 1){
            answer.push(arr)
        }
        
        for(let i=0; i < tickets.length; i++){
            if(!visited[i] && arr.at(-1) === tickets[i][0]){
                visited[i] = true;
                dfs([...arr, tickets[i][1]], visited)
                visited[i] = false;
            }
        }
        
    }
}

