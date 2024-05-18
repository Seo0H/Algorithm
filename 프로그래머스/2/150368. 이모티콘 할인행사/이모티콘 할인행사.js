function solution(users, emoticons) {
    const allDiscountComb = getAllDiscountCombinations(emoticons.length);
    const results = allDiscountComb.map(discounts => {
        const discountedEmoticons = applyDiscounts(emoticons, discounts);
        return calculateSales(users, discountedEmoticons, discounts);
    });
    
    results.sort((a, b) => b.emoticonCount - a.emoticonCount || b.emoticonSales - a.emoticonSales);
    const { emoticonCount, emoticonSales } = results[0];
    return [emoticonCount, emoticonSales];
}

function calculateSales(users, discountedEmoticons, discounts) {
    return users.reduce((totals, [desiredDiscount, budget]) => {
        const { amountSpent, joinedEmoticonPlus } = calculateUserPurchases(discountedEmoticons, discounts, desiredDiscount, budget);
        
        if (joinedEmoticonPlus) {
            totals.emoticonCount += 1;
        } else {
            totals.emoticonSales += amountSpent;
        }
        
        return totals;
    }, { emoticonCount: 0, emoticonSales: 0 });
}

function calculateUserPurchases(discountedEmoticons, discounts, desiredDiscount, budget) {
    const userLog = discountedEmoticons.reduce((log, price, idx) => {
        if (log.joinedEmoticonPlus) return log;
        
        if (desiredDiscount <= discounts[idx]) {
            log.amountSpent += price;
            budget -= price;
        }
        
        if (budget <= 0) {
            log.joinedEmoticonPlus = true;
        }
        
        return log;
    }, { amountSpent: 0, joinedEmoticonPlus: false });
    
    return userLog;
}

function applyDiscounts(emoticons, discounts) {
    return emoticons.map((emoticon, idx) => emoticon - Math.floor(discounts[idx] * 0.01 * emoticon));
}

const availableDiscounts = [10, 20, 30, 40];

function getAllDiscountCombinations(length) {
    const result = [];
    generateCombinations(length, [], result);
    return result;
}

function generateCombinations(count, currentCombo, result) {
    if (count === 0) {
        result.push(currentCombo);
        return;
    }
    for (const discount of availableDiscounts) {
        generateCombinations(count - 1, [...currentCombo, discount], result);
    }
}
