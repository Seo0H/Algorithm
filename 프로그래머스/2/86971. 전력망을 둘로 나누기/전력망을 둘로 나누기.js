function solution(n, wires) {
  // 트리 구조를 저장할 배열을 생성
  const tree = Array.from({ length: n + 1 }, () => []);

  // 각 연결 정보를 트리 배열에 저장 (양방향 그래프)
  wires.forEach(([v1, v2]) => {
    tree[v1].push(v2);
    tree[v2].push(v1);
  });

  const countNodes = getLinkedTreeCountMaker(tree, n);

  return wires.reduce(
    (answer, [v1, v2]) => {
      const nodesInSubtree1 = countNodes(v1, v2);
      const nodesInSubtree2 = n - nodesInSubtree1; // 두 번째 트리의 노드 수는 전체에서 첫 번째 트리의 노드 수를 뺀 값

      return Math.min(answer, Math.abs(nodesInSubtree1 - nodesInSubtree2));
    },
    Number.MAX_SAFE_INTEGER // 초기 최소값을 매우 큰 값으로 설정
  );
}

function getLinkedTreeCountMaker(trees, n) {
  return (root, cutNode) => {
    const q = [root];
    let count = 1; // root 자신도 하나의 노드로 카운트
    const visited = Array.from({ length: n + 1 }, () => false); // idx 0은 방문할 일이 없음. 보정을 위해 +1
    visited[root] = true; // root 노드를 방문 처리

    // BFS 탐색
    while (q.length) {
      const node = q.shift();

      trees[node].forEach((linkedNode) => {
        // cutNode는 탐색에서 제외하고, 이미 방문한 노드도 제외
        if (linkedNode === cutNode || visited[linkedNode]) return;
        count += 1;
        visited[linkedNode] = true;
        q.push(linkedNode);
      });
    }

    return count;
  };
}