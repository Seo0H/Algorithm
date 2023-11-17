function solution(word) {
    const s1 = ['A','E','I','O','U'];
    
    const s2 = s1.reduce((acc, str)=> {
        for(let i=0 ;i<5; i++) acc.push(str.concat(s1[i]))
        return acc;
    },[]);
    
    const s3 = s2.reduce((acc, str)=> {
        for(let i=0 ;i<5; i++) acc.push(str.concat(s1[i]))
        return acc;
    },[]);
    
    const s4 = s3.reduce((acc, str)=> {
        for(let i=0 ;i<5; i++) acc.push(str.concat(s1[i]))
        return acc;
    },[]);
    
      const s5 = s4.reduce((acc, str)=> {
        for(let i=0 ;i<5; i++) acc.push(str.concat(s1[i]))
        return acc;
    },[]);
    
    const finArr = [...s1, ...s2, ...s3, ...s4, ...s5].sort();
    
    return finArr.findIndex(e => e === word)+1;
}