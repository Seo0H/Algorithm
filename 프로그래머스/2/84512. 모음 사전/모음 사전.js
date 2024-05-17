const word = ['A', 'E', 'I', 'O', 'U'];
let count = 0

function solution(word) {
    const result = dfs('')
    return result.get(word)
}


function dfs(cur, logs=new Map()){
    if(cur.length > 5) return
    logs.set(cur, count);
    count+=1;
    for(let i=0; i<5; i++){
    dfs(cur + word[i], logs)
    }
    
    return logs
}
