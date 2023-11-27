function solution(arr) {
    const answer = [0,0];
    let totalSize = arr.length;
    
    dq(0,0,totalSize);
    
    return answer;
    
    function check (y, x, size){
        for(let i = y; i < y + size ; i++){
            for(let j = x ; j < x + size; j++){
                if(arr[y][x] !== arr[i][j]) return false;
            }
        }
        
        return true;
    }

    function dq(startY, startX, size){
        if(check(startY, startX, size)){
            answer[arr[startY][startX]]++;
            return;
        }
        
        dq(startY, startX, size / 2 );
        dq(startY + size / 2, startX, size / 2 );
        dq(startY, startX + size / 2, size / 2 );
        dq(startY + size / 2, startX + size / 2, size / 2 );
    }
}

