function solution(triangle) {
    const sum = Array.from({length: triangle.length}, ()=>[]);
    
    for(let y=0; y<triangle.length; y++){
        for(let x=0; x < triangle[y].length; x++ ){
            if(!y && !x) {
                sum[y][x] = triangle[y][x];
                continue;
            }
            
            if(!x) {
                sum[y][x] = triangle[y][x] + sum[y-1][x];
                continue;
            }
            
            if(!sum[y-1][x]) {
                sum[y][x] = triangle[y][x] + sum[y-1][x-1];
                continue;
            }
            
            sum[y][x] = triangle[y][x] + Math.max(sum[y-1][x-1], sum[y-1][x]);
        }  
    }
    
    return Math.max(...sum.at(-1));
}

// dp. 모든 값 하나하나를 계산하는 방식으로 접근하면 x
// 1차원 배열의 idx를 y, 2차원 배열의 idx를 x 라 할때, y가 1증가할때 x 또는 x + 1 로만 이동이 가능하다. 
// 각각을 하나의 노드로 본다면, 하나의 배열에 해당 노드까지 도달 가능한 sum 값을 저장할 수 있지 않을까?
// 최대값을 구하는 것이니, 두 node 가 선택지가 2개라면 더 큰 값을 적용
