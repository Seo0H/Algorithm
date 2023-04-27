function solution(jobs) {
    jobs.sort((a,b) =>  a[0] - b[0]);
    let answer = 0;
    let q = [];
    let len = jobs.length;
    let i = 0;
    let now = 0;
    
    while (i < len || q.length > 0) {
        if (i < len && jobs[i][0] <= now) {
            q.push(jobs[i++]);
            continue;
        }
        
        q.sort((a,b) => a[1] - b[1]);
        
        if (q.length > 0) {
            let job = q.shift();
            now += job[1];
            answer += now - job[0];
        } else now = jobs[i][0];
    }

    return Math.floor(answer / len);
}