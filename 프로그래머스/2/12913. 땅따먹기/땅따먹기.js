function solution(lands) {
    return Math.max(...lands.reduce((acc,land,idx) => {
       return [
            land[0] + Math.max(acc[1], acc[2], acc[3]),  
            land[1] + Math.max(acc[0], acc[2], acc[3]),
            land[2] + Math.max(acc[0], acc[1], acc[3]),
            land[3] + Math.max(acc[0], acc[1], acc[2]),
        ];
    },[0,0,0,0]));
}