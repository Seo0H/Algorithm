function solution(files) {
    const partFlag = {
            HEAD : 'HEAD',
            NUMBER: 'NUMBER',
            TAIL : 'TAIL'
        };
        
    Object.freeze(partFlag);
    
    const processedFiles = files.reduce((acc,cur) => {
        const curFileInfo = {
                origin : cur,
                head: null,
                number : null,
                tail: null
            };
        
        let curPart = partFlag.HEAD;
        let i = 0;
        
        if(curPart === partFlag.HEAD) {
            let headBuffer = [];

            while(cur[i] === ' ' || Number.isNaN(Number(cur[i]))){
                headBuffer.push(cur[i])
                i += 1;
            }

            curFileInfo.head = headBuffer.join('').toLowerCase();
            curPart = partFlag.NUMBER;
        }

        if(curPart === partFlag.NUMBER) {
            let numberBuffer = [];

            while(Number.isInteger(Number(cur[i]))){
                numberBuffer.push(cur[i])
                i += 1;
            }

            curFileInfo.number = Number(numberBuffer.join(''));
            curPart = partFlag.TAIL;
        }

        if(curPart === partFlag.TAIL) {
            curFileInfo.tail = cur.slice(i);
        }
        
        acc.push(curFileInfo);
        
        return acc
    } ,[])
    
    processedFiles.sort((a, b) => {
        if(a.head === b.head) {
            return a.number - b.number
        }
        
        if(a.head < b.head) {
            return -1
        }
        
        return 1
    })
    
    return processedFiles.map(({origin}) => origin);
}