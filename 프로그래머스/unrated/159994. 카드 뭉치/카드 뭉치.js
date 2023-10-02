function solution(cards1, cards2, goal) {
    for(const thisGoal of goal){
        if(cards1[0] === thisGoal) cards1.shift();
        else if(cards2[0] === thisGoal) cards2.shift();
        else return "No"
    }
    return 'Yes';
}

