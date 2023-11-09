function solution(n, works) {
    works.sort((a,b) => b-a);
    
    while(n){
        works[0]--;
        n--;
        if(works[0] < works[1]) {
            let idx = 0;
            while(works[idx] < works[idx+1]){
                [works[idx], works[idx+1]] = [works[idx+1], works[idx]];
                idx++;
            }
        }
    }
    
    
    return works.reduce((acc,cur) => {
        if(cur < 0) return acc;
        acc += (cur**2)
        return acc;
    } ,0);
};