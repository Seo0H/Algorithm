function solution(queue1, queue2) {
    let q1sum = queue1.reduce((acc,cur) => acc+cur, 0);
    let q2sum = queue2.reduce((acc,cur) => acc+cur, 0);

    if((q1sum+q2sum)%2 === 1) return -1;

    const aimNum = (q1sum + q2sum) / 2;
    const maxLoop = queue1.length*3+1;
    let [q1,q2] = [0,0];


    for(let i=0; i<maxLoop; i++){
        if(q1sum === q2sum){
            return i;
        } else if(q1sum > q2sum){
            let x = queue1[q1++];
            q1sum -= x;
            q2sum += x;
            queue2.push(x);
        }else {
            let x = queue2[q2++]
            q2sum -= x;
            q1sum += x;
            queue1.push(x);
        }
    }

    return -1;
}
