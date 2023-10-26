function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    const tree = Array.from(Array(n+1), () => []);
    
    wires.forEach(([v1, v2]) => {
        tree[v1].push(v2);
        tree[v2].push(v1);
    })
    
    wires.forEach(([v1,v2])=>{
        answer = Math.min(answer, Math.abs(countTree(v1,v2) - countTree(v2,v1)));
    })
    
    return answer
    
    function countTree(root, cutNum){
        let cnt = 0;
        const q = [root];
        const visited = [];
        
        visited[root] = true;
        
        while(q.length){
            let index = q.pop();
            
            tree[index].forEach(el => {
                if(el !== cutNum && visited[el] !== true) {
                    visited[el] = true;
                    q.push(el);
                }
            });
            cnt++;
        }
        
        return cnt;
        
    }
}