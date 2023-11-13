function solution(bridge_length, weight, truck_weights) {
    var count = 1;
    const q = [];
    
    while(truck_weights.length || q.length){
        
        let sumQ = q.length ? q.reduce((acc,cur) => acc + cur.trukWeight, 0) : 0;
        
        if(q[0] && q[0].time === bridge_length) q.shift();
        
        if(sumQ + truck_weights[0] <= weight){
            sumQ += truck_weights[0]
            q.push({trukWeight : truck_weights.shift(), time:1});
        }
        
        q.forEach(el => el.time++);
        count++;      
        
    }
    
    return count;
}

// 다리를 건널 시 다리 길이 시간만큼 해당 다리에 위치해 있어야 함.
// 경과 시간과 truck이 지나가는건 따로따로 흘러감.
// 직관적으로 풀어보기