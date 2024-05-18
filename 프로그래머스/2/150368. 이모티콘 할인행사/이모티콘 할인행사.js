function solution(users, emoticons) {
    var answer = [];
    // 조합 배열 만들기
    const discountComb = getCombFromArray(emoticons, emoticons.length) // number[][]
    const resultHash = discountComb.reduce((logs, discounts) => {
        const discountedEmojis = emoticons.map(applyDiscount(discounts));
    
        const result = users.reduce((logs, [wantDiscount, buget]) => {
            const userLog = discountedEmojis.reduce((logs, emojiPrice ,idx) => {
                const discountPercent = discounts[idx];
                
                if(logs.emoticonPlus) return logs;
                if(wantDiscount <= discountPercent){
                    logs.amountPurchased += emojiPrice;
                    buget -= emojiPrice
                }
                
                if(buget <= 0){
                    logs.emoticonPlus = true;
                }
                return logs
            }, {amountPurchased: 0, emoticonPlus: false}) 
            
            if(userLog.emoticonPlus) {
                logs.emoticonCount += 1;
            } else {
                logs.emoticonSales += userLog.amountPurchased
            }
            
            return logs
            
        }, {emoticonCount: 0, emoticonSales: 0}) 

        logs.push(result)
        return logs
    }, [])
    
    resultHash.sort((a,b) => b.emoticonCount - a.emoticonCount || b.emoticonSales - a.emoticonSales)

    return [resultHash[0].emoticonCount, resultHash[0].emoticonSales];
}

function applyDiscount(discounts){
    return (emoticon, idx) => emoticon - Math.floor(discounts[idx]*0.01*emoticon);
}

const discounts = [10,20,30,40]; // 10 20 30 40
// 주어진 배열 인자로 만들 수 있는 조합을 출력하는 함수
function getCombFromArray(arr, count, eachReault = [], finalResult=[]){
    if(count === 0){
        finalResult.push(eachReault)
        return;
    }

    for(let i=0; i<4; i++){
        getCombFromArray(arr, count-1, [...eachReault, discounts[i]], finalResult)
    }
    
    return finalResult
}
