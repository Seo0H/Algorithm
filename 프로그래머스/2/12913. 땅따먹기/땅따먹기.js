function solution(lands) {
    
    for(let i=1; i<lands.length; i++){
        lands[i][0] += Math.max(lands[i -1][1], lands[i - 1][2], lands[i - 1][3]);
        lands[i][1] += Math.max(lands[i -1][0], lands[i - 1][2], lands[i - 1][3]);
        lands[i][2] += Math.max(lands[i -1][0], lands[i - 1][1], lands[i - 1][3]); 
        lands[i][3] += Math.max(lands[i -1][0], lands[i - 1][1], lands[i - 1][2]); 
    }

    return Math.max(...lands[lands.length - 1]);
}