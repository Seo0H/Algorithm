function solution(cap, n, deliveries, pickups) {
    // i : 배달해야 하는 가장 먼 곳
    // j : 수거해야 하는 가장 먼 곳
    let [i, j] = [n-1, n-1];
    
    while (i >= 0 && deliveries[i] === 0) {
        i--;
    }
    
    while(j >= 0 && pickups[j] === 0){
        j--
    }
    
    let answer = 0;
    
    while (i >= 0 || j >= 0){
        answer += (Math.max(i,j) + 1) * 2 // 물류 창고 까지 돌아가야 하기 때문에 x2
    
        // 배달
        let cur = cap;
        
        while (i >= 0 && cur > 0) {
            if(deliveries[i] > cur) { // 배달해야하는 집의 용량이 현재 담고 있는 용량보다 큰 경우
                deliveries[i] -= cur; // 한번에 다 처리를 못하기에, 다시 갔다 와야함.
                cur = 0;
            } else { 
                // 배달해야하는 집의 용량이 현재 담고 있는 용량보다 작은 경우
                cur -= deliveries[i] 
                deliveries[i] = 0;
                
                while ( i >= 0 && deliveries[i] === 0){
                    i-=1;
                }
            }
        }
        
        // 수거
        cur = cap;
        
        while (j >= 0 && cur > 0) {
            if(pickups[j] > cur) { // 수거해야 하는 집의 용량이 수용가능한 용량보다 큰 경우
                pickups[j] -= cur; // 한번에 다 처리를 못하기에, 다시 갔다 와야함.
                cur = 0;
            }else { 
                // 수거해야 하는 집의 용량이 현재 수용 가능한 있는 용량보다 작은 경우
                cur -= pickups[j] 
                pickups[j] = 0;
                
                while ( j >= 0 && pickups[j] === 0){
                    j-=1;
                }
            }
        }
    }
    
    return answer;
}