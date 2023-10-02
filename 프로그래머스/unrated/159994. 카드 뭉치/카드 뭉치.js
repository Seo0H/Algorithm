function solution(cards1, cards2, goal) {
    let thisGoal= goal.shift();
    let thisCard1 = cards1.shift();
    let thisCard2 = cards2.shift();
    
    
    while(goal.length > 0){
        while(thisCard1){
            if(thisCard1 === thisGoal){
                if(goal.length === 0) return'Yes'
                thisGoal = goal.shift();
                thisCard1 = cards1.shift();
            } else break;
        }

        while(thisCard2){
            if(thisCard2 === thisGoal){
                if(goal.length === 0) return 'Yes'
                thisGoal = goal.shift();
                thisCard2 = cards2.shift();
            } else break;
        }
        
        if(thisCard1 !== thisGoal && thisCard2 !== thisGoal) return 'No'
    }
    
    return 'Yes';
}

