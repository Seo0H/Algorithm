function solution(fees, records) {
    const [basicTime, basicFee, uintTime, uintFee] = fees;
    
    const receipt = new Map();
    
    const calcRecods = records.reduce((acc, recodStr) => {
        // 문자열 처리
        const [curTimeStr, carNum, term] = recodStr.split(' ');
        const [curOur, curMin] = curTimeStr.split(':').map(Number);
        const curTimeToMin = curOur * 60 + curMin;
        
        const carRecord = acc.get(carNum);

        // 처음 들어온 경우
        if(carRecord === undefined ){
            acc.set(carNum, ['IN', curTimeToMin, 0 ]); // [IN | OUT, entryTime, residenceTime ]
            return acc;
        }
        
        // 다시 들어온 경우
        if(carRecord[0] === 'OUT' && term === 'IN'){
            acc.set(carNum, [term, curTimeToMin, carRecord[2]]);
            return acc;
        }
        
        // 차량이 나가는 경우
        if(carRecord[0] === 'IN' && term === 'OUT'){
            const entryTime = carRecord[1];
            const residenceTime = curTimeToMin - entryTime + carRecord[2]; // 잔류시간
            let totalFee = 0;
            
            if (residenceTime < basicTime) {
                // 기본요금 청구
                totalFee = basicFee;
            }
            
            if (residenceTime >= basicTime){
                // 기본요금 + 초과요금 청구
                 totalFee = basicFee + Math.ceil((residenceTime - basicTime) / uintTime) * uintFee;
            }

            acc.set(carNum, [term, 0, residenceTime]) // [IN | OUT, entryTime, residenceTime ]
            receipt.set(carNum, totalFee)   // 최종 요금 업데이트
            
            return acc;
        }
        
        return acc;
       }, new Map());
    
    // 하루가 지났는데도 나가지 않은 차량
    const dayEnd = 23*60 + 59;
    
    for(const [carNum, [term, entryMin, residenceTime ]] of calcRecods){
        if(term === 'OUT') continue;
        const totalResidenceTime = dayEnd - entryMin + residenceTime;
        let totalFee = 0;
        
        if(totalResidenceTime < basicTime) {
            totalFee = basicFee
        }
        
        if(totalResidenceTime >= basicTime) {
            totalFee = basicFee +  Math.ceil((totalResidenceTime - basicTime) / uintTime) * uintFee;
        }
        receipt.set(carNum, totalFee)   // 최종 요금 업데이트
        calcRecods.set(carNum, ['OUT', 0, totalResidenceTime]);
    }
    
    return [...receipt].sort((a,b) => a[0] - b[0]).map(([,totalFee]) => totalFee)
}

// math ceil
// in - out 
// hash? Map
// [차량번호] => ['IN' | 'OUT' , min ]
// 모든 시간을 분으로 바꾸어서 생각하기

// 각 차량번호 별로 IN OUT 체크
// 들어올때의 시간 '분'으로 변환해 해당 차량번호에 저장
// 해당 차량번호가 out인 경우, 차이시간 [차량번호][1] - 나간 시간 분 을 unitTime 이 참인지 비교.
// 만약 참이라면 기본요금만 청구, 아니라면 차이시간 / 단위시간 을 올림 한 것에 단위 요금을 곱하고 기본요금을 더해 저장 
//          -> 이 저장을 어디다 할건지 . 새로운 배열 만들어서 2차원 배열로 넣기 [[차량번호, 금액]] 
//              -> 파기. 동일 차량번호가 두번이상 와리가리 한경우 처리하기 번거로움
//          -> 기존 Map에 요소의 배열 3번째 요소로 넣기.

// records를 순회가 끝나고도 in인 차량번호 식별 후 23:59 Math.ceil((들어온 시간 - 23:59) / 단위시간) * 단위요금 + 기본요금 청구.
