function solution(numbers) {
    const stack = [0]; // numbers idx stack
    const answers = new Array(numbers.length);
    
    for(let i=1; i<numbers.length; i++){
        // 다음 탐색 할 인덱스가 있고 다음 값이 현재 값보다 큰경우
       while(stack.length > 0 && numbers[stack.at(-1)] < numbers[i]){
           answers[stack.pop()] = numbers[i] 
       }
        
        stack.push(i)
    }
    
    while(stack.length > 0){
        answers[stack.pop()] = -1;
    }
    
    return answers
    
}