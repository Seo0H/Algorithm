function solution(routes) {
    let answer = 1;
    routes.sort(([,a],[,b]) => a - b);
    
    let currentCamPosition = routes[0][1];
        
    for(let i=1; i < routes.length; i++){
        const [ currentStart, currentEnd ] = routes[i];
        
        // 현재 카메라로 감지할 수 있는 경우
        if(currentStart <= currentCamPosition) continue;
        
        // 현재 카메라로 감지할 수 없는 경우
        answer+=1;
        currentCamPosition = currentEnd
    }
    
    return answer;
}
