
function solution(n, wires) {
  // 트리 구조를 저장할 배열을 생성
  const tree = Array.from({ length: n + 1 }, () => []);

  // 각 연결 정보를 트리 배열에 저장 (양방향 그래프)
  wires.forEach(([v1, v2]) => {
    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  // BFS를 사용하여 연결된 노드의 개수를 계산하는 함수
  const countNodes = (start, skipNode) => {
    const visited = Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let count = 1;

    while (queue.length) {
      const node = queue.shift();

      tree[node].forEach((neighbor) => {
        if (!visited[neighbor] && neighbor !== skipNode) {
          visited[neighbor] = true;
          queue.push(neighbor);
          count++;
        }
      });
    }

    return count;
  };

  // 모든 선을 하나씩 끊어가며 두 트리의 노드 수 차이를 계산
  let minDifference = Number.MAX_SAFE_INTEGER;

  for (const [v1, v2] of wires) {
    const nodesInSubtree1 = countNodes(v1, v2); // v1부터 시작해 v2로 가는 선을 끊고 탐색
    const nodesInSubtree2 = n - nodesInSubtree1; // 두 번째 트리의 노드 수는 전체에서 첫 번째 트리의 노드 수를 뺀 값

    const difference = Math.abs(nodesInSubtree1 - nodesInSubtree2);
    minDifference = Math.min(minDifference, difference);
  }

  return minDifference;
}