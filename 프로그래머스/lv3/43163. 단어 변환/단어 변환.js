function solution(begin, target, words) {

    if(!words.includes(target)) return 0;
    
    const wordsCount = words.length;
    const wordLength = words[0].length;
    const q = [[begin,0]];
    
    while(q.length > 0){
        const [compare , count] = q.shift();

        if(compare === target) return count;

        for(let y=0; y<wordsCount; y++){
            let isOnceDiffrent = 1;
            for(let x=0; x<wordLength ; x++)
                if(words[y][x] !== compare[x]) isOnceDiffrent--;
            
            if(isOnceDiffrent === 0) {
                q.push([words[y], count+1]);
                words[y] = '';
            };
        }
    }
    
    return 0;
}