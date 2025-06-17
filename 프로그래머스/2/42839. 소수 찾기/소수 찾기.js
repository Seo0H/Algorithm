function solution(numbers) {
    const numbersArray = numbers.slice("");
    const allCombinations = getComb(numbersArray)
    
    console.log(allCombinations);
    
    return [...allCombinations].reduce((count,cur) => {
        if(isPrime(cur)) {
            count += 1;
        }
        
        return count
    } , 0)
}

function isPrime(num) {
    if (num <= 1) return false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getComb(array, result = '', visited = [], finalResult = new Set()){
    
    for(let i=0; i < array.length ; i++){
        result && finalResult.add(Number(result));
        
        if(!visited[i]) {
            visited[i] = true;
            getComb(array, result + array[i], visited, finalResult);
            visited[i] = false;
        }
    }
    
    return finalResult
}