function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    const q = [[begin, 0]];
    
    while(q.length){
        const [compareTxt, count] = q.shift();
        if (compareTxt === target) return count;
        words.forEach((e,idx) => {
            let isDiff = 1;
            for(let i=0; i<e.length ; i++) if(e[i] !== compareTxt[i]) isDiff -= 1;
            if (isDiff === 0){
                words[idx] = '';
                q.push([e, count+1]);
            } 
        })
    }
    
    return 0;
}