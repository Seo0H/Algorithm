function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    const answers = []
    const trees = Array.from({length:n+1}, () => []);
    
    wires.forEach(([v1, v2]) => {
        trees[v1].push(v2);
        trees[v2].push(v1);
    })
    
    const getLinkedTreeCount = getLinkedTreeCountMaker(trees, n);
    
    wires.forEach(([v1, v2]) => {
        answer = Math.min(answer, Math.abs(getLinkedTreeCount(v1, v2) - getLinkedTreeCount(v2, v1)))
    })
    
    return answer;
};

function getLinkedTreeCountMaker(trees, n) {
    
    return (root, cutNode) => {
        const q = [root];
        let count = 1;
        const visited = Array.from({length:n+1}, () => false); // idx 0은 방문할 일이 없음. 보정을 위해 +1
        visited[root] = true;
        
        while(q.length){
            const node = q.shift();

            trees[node].forEach((linkedNode) => {
                if(linkedNode === cutNode || visited[linkedNode]) return;
                count += 1;
                visited[linkedNode] = true;
                q.push(linkedNode);
            })
            
        }
        
        return count
    }
}