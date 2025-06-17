function solution(answers) {
    if(!answers.length) return []
    
    // user info list
    const users = [
        {
            id: 1,
            answer : [1, 2, 3, 4, 5],
            count : 0
        },
        {
            id: 2,
            answer : [2, 1, 2, 3, 2, 4, 2, 5],
            count : 0
        },
        {
            id: 3,
            answer : [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            count : 0
        }
    ];
    
    // calculation count
    answers.forEach((answer, idx) => {
        for(const user of users) {
            if(user.answer[idx % user.answer.length] === answer) {
                user.count += 1;
            }
        }
    })
    
    // check max count
    const maxCount = Math.max(...users.map(({ count }) => count));
    
    // find max count users
    return users.filter(({count}) => count === maxCount).map(({id}) => id) 
}
