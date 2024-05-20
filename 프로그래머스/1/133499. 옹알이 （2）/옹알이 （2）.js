function solution(babbling) {
    const babblingSet = ['aya', 'ye', 'woo', 'ma'];
    return babbling.reduce((counts, curBabble) => {
        for(let i=0; i< babblingSet.length; i++){
            const isRepeated = new RegExp(babblingSet[i].repeat(2)).test(curBabble)
            if(isRepeated) return counts
            curBabble = curBabble.split(babblingSet[i]).join(' ').trim()
        }
        if(curBabble) return counts
        return counts + 1
    }, 0)
}
