function solution(users, emoticons) {
    var answer = [];
    const discounts = [10, 20, 30, 40];
    dfs(emoticons.length, [])
    answer.sort((a,b) => b.emoPluse - a.emoPluse || b.sales - a.sales)
    return [answer[0].emoPluse, answer[0].sales];
    
    function dfs(depth,discountPer){

        if(discountPer.length >= emoticons.length){
            const applyDiscounts = emoticons.map((cur,idx) => cur * (1 - discountPer[idx] * 0.01))
            
            answer.push(
                users.reduce((acc, [userPercent, buget]) =>{
                let userSales = 0;
                
                for(let idx = 0; idx < emoticons.length ; idx++){
                    const applyDiscount = applyDiscounts[idx];
                    
                    if(userPercent <= discountPer[idx]) {
                        buget -= applyDiscount;
                        
                        if(buget <= 0){
                            acc.emoPluse++;
                            userSales = 0;
                            break;
                        } else {
                            userSales += applyDiscount;
                        }
                    }
                        // 유저가 원하는 할인율보다 임티 할인율 클 경우
                        // 유저 예산에서 applyDiscount을 뺀다. 
                        // 만약 유저 예산이 0 이하가 되면 emoPluse 를 +1 하고
                        // 해당 유저가 구매했던 이모티콘 금액을 sales에서 제외한다. 이때 루프 문을 빠저나간다.
                        // 아니라면 sales를 +1 한다.
                }
                acc.sales += userSales;
                return acc;
            }, {emoPluse: 0, sales: 0}));
            
            return;
        }
        
        for(let i=0 ; i < 4 ; i++){
            dfs(depth-1, [...discountPer, discounts[i]]);
        }
    }
}

