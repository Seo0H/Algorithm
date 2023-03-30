function solution(elements) {
    const uniqSum = new Set();
    const len = elements.length;

    for(let i=1; i<=len; i++){
        let sum = 0;
        for (let j=0; j<len; j++){
            if(j === 0){
                for (let k=0; k<i; k++) {
                    sum += elements[k];
                }
            }
            else {
                sum -= elements[j-1];
                sum += elements[(j+i-1) % len];
            }
            uniqSum.add(sum);
        }
    };
    
    return uniqSum.size;
}