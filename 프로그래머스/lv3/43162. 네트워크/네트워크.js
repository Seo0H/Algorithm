function solution(n, computers) {
    var answer = 0;
    for(let y=0; y<computers.length; y++){
        for(let x=0; x<computers.length; x++){
           if(computers[y][x] === 1) {
               answer++;
               computers[y][x] = -1;
               dfs(x, computers)};
        }      
    }
    return answer;
}

function dfs(y, computers){
    const q = [y];
    while(q.length){
        const qy = q.shift()
        for(let x=0; x<computers.length; x++ ){
            if(computers[qy][x] === 1) {
                computers[qy][x] = -1;
                q.push(x);
            }
        }
    }
}