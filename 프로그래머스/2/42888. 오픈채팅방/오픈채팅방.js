function solution(record) {
    const idToNicknameMap = record.reduce((map,cur) => {
        const [type, uid, name] = cur.split(" ");
        if(type === 'Leave') return map
        map.set(uid, name);
        return map
    }, new Map());
    
    const recordToMessage = {
        Enter : (nickName) => `${nickName}님이 들어왔습니다.`,
        Leave : (nickName) => `${nickName}님이 나갔습니다.`,
    }
    
    return record.reduce((result, rawMessage) => {
        const [type, uid] = rawMessage.split(" ");
        
        if(type === 'Change') return result
        
        const nickName = idToNicknameMap.get(uid);
        result.push(recordToMessage[type](nickName))
        
        return result 
    }, []);
}

