function solution(arr1, arr2) {
    const answer = Array.from({length:arr1.length}, _=> Array.from({length:arr2[0].length}))
    
    for(let _2y=0; _2y < arr2[0].length; _2y++){
        for(let y = 0; y < arr1.length; y++){
            let product = 0;
            for(let x = 0 ; x < arr1[0].length; x++){
               product += arr1[y][x] * arr2[x][_2y]
            }
        answer[y][_2y] = product;        
       }
    }
       

    return answer;
}


    // 1*3 + 4*3 , 3*3 + 2*3 , 4*3 + 1*3
    // 3 + 12 = 15 , 9 + 6 = 15 , 12 + 3 = 15
    
    // 2*5 + 3*2 + 2*3,
    // 10 + 6 + 6 = 22