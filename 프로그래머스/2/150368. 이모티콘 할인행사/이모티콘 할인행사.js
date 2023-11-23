
function solution(users, emoticons) {
	let answer = {};
	const discounts = [10, 20, 30, 40];
	dfs(emoticons.length, []);
	return [answer.emoPlus, answer.sales];

	function dfs(depth, discountPer) {
		if (discountPer.length >= emoticons.length) {
			const applyDiscounts = emoticons.map((cur, idx) => cur * (1 - discountPer[idx] * 0.01));

			const calculateSales = users.reduce(
				(acc, [userPercent, budget]) => {
					let userSales = 0;

					for (let idx = 0; idx < emoticons.length; idx++) {
						const applyDiscount = applyDiscounts[idx];

						if (userPercent <= discountPer[idx]) {
							budget -= applyDiscount;

							if (budget <= 0) {
								acc.emoPlus++;
								userSales = 0;
								break;
							} else {
								userSales += applyDiscount;
							}
						}
					}
					acc.sales += userSales;
					return acc;
				},
				{ emoPlus: 0, sales: 0 },
			);

			if (answer.emoPlus === undefined) {
				answer = calculateSales;
			} else if (answer.emoPlus < calculateSales.emoPlus) {
				answer = calculateSales;
			} else if (answer.emoPlus === calculateSales.emoPlus) {
				answer = answer.sales < calculateSales.sales ? calculateSales : answer;
			}

			return;
		}

		for (let i = 0; i < 4; i++) {
			dfs(depth - 1, [...discountPer, discounts[i]]);
		}
	}
}