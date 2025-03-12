function solution(bridge_length, weight, truck_weights) {
    let count = 1;
    const crossingTrucks = []; // { crossingTrucks , truck }[]
    let onBridgeTrucksWeight = 0;
    
    while(truck_weights.length || crossingTrucks.length ){
        // 다리에 대기중인 트럭이 올라갈 수 있는 경우, 다리에 트럭을 올린다.
        if(onBridgeTrucksWeight + truck_weights[0] <= weight){
            const curTruck =  truck_weights.shift();
            crossingTrucks.push({ onBridgeTime : 1 , truck: curTruck });
            onBridgeTrucksWeight += curTruck;
        }
        
        // 다리 위에 트럭이 있고, 트럭이 다리 위에 있었던 시간이 다리 길이와 같으면 다리를 지났다고 간주한다.
        if(crossingTrucks.length && crossingTrucks[0].onBridgeTime === bridge_length) {
            onBridgeTrucksWeight -= crossingTrucks.shift().truck;
        }
        
        // 다리에 있는 트럭의 시간을 추가한다.
        crossingTrucks.forEach(truck => truck.onBridgeTime++)
        
        count += 1;
    }
    
    return count;
}