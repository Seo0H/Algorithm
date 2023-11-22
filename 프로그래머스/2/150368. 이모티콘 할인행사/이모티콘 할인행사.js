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