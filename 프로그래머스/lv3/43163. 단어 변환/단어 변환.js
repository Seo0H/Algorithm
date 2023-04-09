// 0409 두번째 풀이
function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    
    let answer = 0;
    const q = [[begin, 0]]; // [비교할 단어, 카운트 횟수]
    
    while(q.length > 0){
        const [compare, count] = q.shift();
        if(compare === target) return count;
        words.forEach((word,idx) =>{
            let isCharDiffrent = 1;
            for(let i=0; i<compare.length; i++) if(compare[i] !== word[i]) isCharDiffrent -= 1;
            if(isCharDiffrent === 0){
                q.push([word, count+1]);
                words[idx] = '';
            }
        })
    }
    
    return 0;
}