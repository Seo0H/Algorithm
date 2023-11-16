function solution(n, s) {
    if(s === 1 || s < n) return [-1];
    
    const arr = [];
    for(let i=n; i > 0; i--) {
        const a = Math.floor(s/i); 
        s -= a;
        arr.push(a);
    }
    return arr.sort();
}

