function solution(users, emoticons) {
    let answer = [];
    const discounts = [10, 20, 30, 40];
    const maxDiscountPermutations = Math.pow(4, emoticons.length);
    const memo = new Array(maxDiscountPermutations).fill(null).map(() => new Map());

    dfs(0, 0, []);

    answer.sort((a, b) => b.emoPlus - a.emoPlus || b.sales - a.sales);
    return [answer[0].emoPlus, answer[0].sales];

    function dfs(idx, discountPer, curDiscounts) {
        if (idx >= emoticons.length) {
            const discountKey = curDiscounts.join(',');
            if (memo[idx].has(discountKey)) {
                return memo[idx].get(discountKey);
            }

            const applyDiscounts = emoticons.map((cur, idx) => cur * (1 - curDiscounts[idx] * 0.01));
            const result = users.reduce(
                (acc, [userPercent, budget]) => {
                    let userSales = 0;

                    for (let idx = 0; idx < emoticons.length; idx++) {
                        const applyDiscount = applyDiscounts[idx];

                        if (userPercent <= curDiscounts[idx]) {
                            budget -= applyDiscount;

                            if (budget <= 0) {
                                acc.emoPlus++;
                                userSales = 0;
                                break;
                            } else userSales += applyDiscount;
                        }
                    }
                    acc.sales += userSales;
                    return acc;
                },
                { emoPlus: 0, sales: 0 },
            );

            memo[idx].set(discountKey, result);
            answer.push(result);
            return result;
        }

        for (let i = 0; i < 4; i++) {
            dfs(idx + 1, i, [...curDiscounts, discounts[i]]);
        }
    }
}
