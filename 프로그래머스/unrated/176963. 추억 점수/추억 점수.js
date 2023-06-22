function solution(name, yearning, photos) {
    return photos.map((photo) => photo.reduce((sumYearning,thisName,idx)=> {
            const NameIdx = name.indexOf(thisName);
            const hasName = NameIdx >= 0;
            if(hasName) sumYearning += yearning[NameIdx];
            return sumYearning;
        },0));
}

// name과 yarning의 idx는 일치한다.
// photo[i] 의 배열의 길이는 3 ~ 7사이다
// photo[i] 의 원소는 중복되지 않는다.

// 1. photo를 순차적으로 순회를 시작한다.
// 2. yarning을 더하는 변수인 sumYarning을 선언한다.
// 3. photo[i] 의 요소를 하나씩 순회한다.
// 4. photo[i][d] 의 요소가 name 있을 경우 해당 idx를 구한다.
// 4-1. yearning[idx] 를 sumYarning에 더한다.
// 5. photo[i]의 순회할 요소가 더이상 없을때 sumYarning을 answer에 push한다.