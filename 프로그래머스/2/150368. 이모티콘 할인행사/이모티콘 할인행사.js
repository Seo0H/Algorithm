/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/150368
 * @date 23-11-22
 */

function solution(users, emoticons) {
	var answer = [];
	const discounts = [10, 20, 30, 40];
	dfs();
	// sort 와 if문의 효율성 차이를 비교하기 위해 주석 처리
	// answer.sort((a, b) => b.emoPlus - a.emoPlus || b.sales - a.sales);
	return [answer.emoPlus, answer.sales];

	function dfs(discountPermutation = []) {
		if (discountPermutation.length === emoticons.length) {
			const emojiAppliedDiscounts = emoticons.map(
				(cur, idx) => cur * (1 - discountPermutation[idx] * 0.01),
			);

			const calculateSales = users.reduce(
				(acc, [userPercent, budget]) => {
					let userSales = 0;

					for (let idx = 0; idx < emoticons.length; idx++) {
						const emojiAppliedDiscount = emojiAppliedDiscounts[idx];

						// 유저가 원하는 할인율보다 조합된 할인이 클 경우
						if (userPercent <= discountPermutation[idx]) {
							budget -= emojiAppliedDiscount;

							if (budget <= 0) {
								acc.emoPlus++;
								userSales = 0;
								break;
							}
                            
                            if(budget > 0) userSales += emojiAppliedDiscount;
						}
					}
					acc.sales += userSales;
					return acc;
				},
				{ emoPlus: 0, sales: 0 },
			);
            
            // answer.push(calculateSales)

			// 초기 값 판별
			if (answer.emoPlus === undefined) {
				answer = calculateSales;
                return;
			}

			if (answer.emoPlus < calculateSales.emoPlus) {
				answer = calculateSales;
                return;
			}

			// 우선순위가 높은 emoPlus의 구매 횟수가 같은 경우
			if (answer.emoPlus === calculateSales.emoPlus) {
				// 매출액 기준으로 높은 요소를 answer에 할당한다.
				answer = answer.sales < calculateSales.sales ? calculateSales : answer;
                return;
			}
            
            return;
		}

		for (let i = 0; i < 4; i++) {
			dfs([...discountPermutation, discounts[i]]);
		}
	}
}
