function solution(cap, n, deliveries, pickups) {
    // i 배달해야 하는 가장 먼 집, j 픽업해야 하는 가장 먼집
    let [i,j] = [n-1, n-1];
    let answer = 0;
    
    while(i >= 0 && deliveries[i] === 0) i -= 1 ;
    while(j >= 0 && pickups[j] === 0) j -= 1 ;
    
    // 배달
    while(i >= 0 || j >= 0){
        // 일단 한번 왔다갔다 할 때 둘 중 더 먼 곳을 가야 함.
        // 물류창고로 돌아와야 하기 때문에 *2
        answer += (Math.max(i,j) + 1) * 2; 
        
        let curCap = cap;
        
        while(curCap > 0 && i >= 0){
            if(deliveries[i] > curCap){
                deliveries[i] -= curCap;
                curCap = 0;
            } else {
                curCap -= deliveries[i];
                deliveries[i] = 0;

                while(i >= 0 && deliveries[i] === 0){
                    i -=1;
                }
            }
        }
        
        // 수거
        curCap = cap;
        
        while(curCap > 0 && j >= 0){
            if(pickups[j] > curCap){
                pickups[j] -= curCap;
                curCap = 0;
            } else {
                curCap -= pickups[j];
                pickups[j] = 0;

                while(j >= 0 && pickups[j] === 0){
                    j -=1;
                }
            }
        }
    }
    
    return answer;
}

// 만약 deliveries[i]가 curCap 보다 크면
// -> curCap을 0으로 만들고, deliveries[i] - curCap을 한다. 
// -> 이 경우, 더이상 전달할 수 있는 배달물이 없기에 물류창고로 돌아가야 한다.
// -> answer += i * 2 를 한다.

// 만약 deliveries[i]가 curCap 보다 작으면
// -> curCap에서 deliveries[i]를 빼고, deliveries[i]를 0으로 만든다.
// -> 배달 가능한 curCap이 존재하기에, 그 다음 배달 가능한 장소로 이동해
// -> curCap이 0보다 큰 동안 위 조건문을 반복 순회한다.