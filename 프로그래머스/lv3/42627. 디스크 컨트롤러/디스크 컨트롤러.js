class minHeap{
    heap;
    constructor() {
        this.heap = [];
    }

    #childeLeftIdx = (parentIdx) => parentIdx * 2 + 1;
    #childeRightIdx = (parentIdx) => parentIdx * 2 + 2;
    #parentIdx = (childeIdx) => Math.floor(childeIdx/2);
    #swap = (a, b)=> {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }


    insert(arr) {
        this.heap.push(...arr);
        this.#sortHeap(this.#parentIdx(this.heap.length-1));
    }
    
    pop(){
        const minVal = this.heap.splice(0,1)[0];
        this.#sortHeap(this.heap.length-1);
        return minVal;
    }

    #sortHeap(childIdx){
        if(this.heap.length === 0 || !this.heap[childIdx]) return;
            
        const parentIdx = this.#parentIdx(childIdx);
        const childeLeftIdx = this.#childeLeftIdx(parentIdx);
        const childeRightIdx = this.#childeRightIdx(parentIdx);
        if(!this.heap[childeLeftIdx]) return;
        
        for(let parentI = parentIdx; parentI >= 0; parentI--){
            let smallerChildIdx = childeRightIdx;
            smallerChildIdx = this.heap[smallerChildIdx] 
                    && this.heap[smallerChildIdx][1] < this.heap[childeLeftIdx][1] 
                    ? smallerChildIdx 
                    : childeLeftIdx;
            if(this.heap[parentIdx][1] > this.heap[smallerChildIdx][1]) this.#swap(parentIdx, smallerChildIdx)
        }
        
        if(this.heap[this.#childeLeftIdx(childeLeftIdx)]) this.#sortHeap(childeLeftIdx);
        if(this.heap[this.#childeRightIdx(childeRightIdx)]) this.#sortHeap(childeRightIdx);
    }

}

function solution(jobs) {
    
    const waitingList = new minHeap();
    waitingList.insert(jobs);
    
    let total = 0;
    let time = 0; 
    let task = waitingList.pop();
    let beforeTaskEndTime = 0;
    
    while(true){        
        if(time === task[1] + beforeTaskEndTime){
            total += task[1];
            beforeTaskEndTime = task[1];
            task = waitingList.pop();
            if(!task) break;
            if (time > task[0]) total += (time - task[0]);
        }
        time++;
    }
    return +(total/jobs.length).toFixed(0);
}


// 실행 시간이 짧은 작업을 일찍 시작할수록 전체 요청되는 시간이 짧아짐
// minHeap 을 현재 실행시킬 수 있는 모든 요청을 담아두는 대기리스트로 보고 풀면 됨.
// 정렬되는 기준은 요청시간이 얼마나 짧은가임
// heap의 root노드는 지금 실행 가능한 모든 대기리스트 중 가장 짧은 요청시간을 가지게 됨.