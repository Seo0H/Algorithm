/*
 * @url https://school.programmers.co.kr/learn/courses/30/lessons/92341
 * @date 23-11-30
 */

function solution(fees, records) {
	const [BASE_TIME, BASE_FEE, UNIT_TIME, UNIT_FEE] = fees;

	const receipt = new Map();

	const calcRecodesBeforeDayEnd = records.reduce((acc, recordString) => {
		// 문자열 처리
		const [currentTimeString, carNumber, currentTerm] = recordString.split(' ');
		const [currentHour, currentMinute] = currentTimeString.split(':').map(Number);
		const currentTimeInMinutes = currentHour * 60 + currentMinute;

		const carRecord = acc.get(carNumber);

		const isInitVisited = carRecord === undefined;

		// 처음 들어온 경우
		if (isInitVisited) {
			acc.set(carNumber, ['IN', currentTimeInMinutes, 0]); // 체류 시간 기록 초기화 후 등록
			return acc;
		}

		const [carTermLog, entryTime, residenceTimeLog] = carRecord; // [차량 출입 기록, 입장 시간, 체류 시간 기록]
		const isRevisited = carTermLog === 'OUT' && currentTerm === 'IN';
		const isExit = carTermLog === 'IN' && currentTerm === 'OUT';

		// 다시 들어온 경우
		if (isRevisited) {
			acc.set(carNumber, ['IN', currentTimeInMinutes, residenceTimeLog]);
			return acc;
		}

		// 차량이 나가는 경우
		if (isExit) {
			const updatedResidenceTime = currentTimeInMinutes - entryTime + residenceTimeLog; // 체류 시간 업데이트
			let totalFee = 0;

			// 업데이트된 잔류 시간이 기본 시간보다 적은 경우 - 기본요금 청구
			if (updatedResidenceTime < BASE_TIME) {
				totalFee = BASE_FEE;
			}

			// 업데이트된 잔류 시간이 기본 시간보다 많거나 같은 경우 - 기본요금 + 초과요금 청구
			if (updatedResidenceTime >= BASE_TIME) {
				totalFee = BASE_FEE + Math.ceil((updatedResidenceTime - BASE_TIME) / UNIT_TIME) * UNIT_FEE;
			}

			acc.set(carNumber, [currentTerm, 0, updatedResidenceTime]);
			receipt.set(carNumber, totalFee); // 최종 요금 업데이트

			return acc;
		}

		return acc;
	}, new Map());

	// 하루가 지났는데도 나가지 않은 차량 계산
	const DAY_END_MINUTE = 23 * 60 + 59;

	for (const [carNumber, [currentTerm, entryMin, residenceTime]] of calcRecodesBeforeDayEnd) {
		if (currentTerm === 'OUT') continue;

		const totalResidenceTime = DAY_END_MINUTE - entryMin + residenceTime;
		let totalFee = 0;

		// 전체 잔류 시간이 기본 시간보다 적으면 - 기본 요금 청구
		if (totalResidenceTime < BASE_TIME) {
			totalFee = BASE_FEE;
		}

		// 전체 잔류 시간이 기본 시간보다 같거나 크면 - 기본 요금 + 추가 요금 청구
		if (totalResidenceTime >= BASE_TIME) {
			totalFee = BASE_FEE + Math.ceil((totalResidenceTime - BASE_TIME) / UNIT_TIME) * UNIT_FEE;
		}
		receipt.set(carNumber, totalFee); // 최종 요금 업데이트
	}

	return [...receipt].sort((a, b) => a[0] - b[0]).map(([, totalFee]) => totalFee);
}
