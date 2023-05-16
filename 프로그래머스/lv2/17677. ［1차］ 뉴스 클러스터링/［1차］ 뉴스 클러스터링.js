function solution(str1, str2) {
    if(str1.length === 0 && str2.length === 0) return 65536;
    
    const str1Map = split2charMap(str1)
    const str2Map = split2charMap(str2)
    
    const unionLen = Object.values(union(str1Map, str2Map)).reduce((acc,cur) => acc+cur, 0);
    const intersecLen = Object.values(intersection(str1Map, str2Map)).reduce((acc,cur) => acc+cur, 0);

    if(unionLen === 0 && intersecLen === 0) return 65536; 
    return Math.floor(intersecLen / unionLen * 65536);
}


function split2charMap (str){
    return str.toLowerCase().split('')
                        .reduce((acc,cur,idx,arr)=>{
                            if(idx === 0 ) return acc;
        
                            const before = arr[idx-1];
                            const beforeCode = arr[idx-1].charCodeAt();
                            const curCode = cur.charCodeAt();
                            if( curCode >= 97 && curCode <= 122 && beforeCode >= 97 && beforeCode <= 122)
                                acc[before+cur] ? acc[before+cur]++ : acc[before+cur] = 1;
                            
                            return acc;
                        },{})
}

function intersection(obj1, obj2){
    const interKeysArr = Object.keys(obj1).filter({}.hasOwnProperty.bind(obj2));
    return interKeysArr.reduce((acc,cur) => {
                            acc[cur] = Math.min(obj1[cur],obj2[cur]);
                            return acc },{});
}

function union(obj1, obj2){
    const union = {...obj1};
    
    for(let key in obj2)
        if(!union.hasOwnProperty(key)) union[key] = obj2[key];
        else union[key] = Math.max(union[key], obj2[key]);

    return union
}