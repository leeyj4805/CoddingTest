// 문자 
// n개의 섬 사이에 다리를 건설하는 비용 (costs)이 주어질 때, 최소의 비용으로 모든 섬이
// 서로 통행을 가능하도록 만들 때 필요한 최소 비용을 return하도록 solution을 완성하세요.
// 다리를 여러 번 건너더라도, 도달할 수만 있으면 통행을 가능하다고 봅니다.
// A섬과 B섬 사이에 다리가 있고 B섬과 C섬 사이에 다리가 있으면 A와 C섬은 서로 통행이 가능합니다.

// 제한사항
// 섬의 개수 n은 1이상 100 이하입니다.
// costs의 길이는 ((n-1) * n) / 2 입니다.
// 임의의 i에 대해서 costs[i][0]와 costs[i][1]에는 다리가 연결되는 두 섬의 변호가 들어있습니다.
// costs[i][2]에는 이 두 섬을 연결하는 다리를 건설할 때 드는 비용입니다.
// 같은 연결은 두 번 주어지지 않습니다. 또한 순서가 바뀌더라도 같은 연결로 봅니다.
// 즉 0과 1 사이를 연결하는 비용이 주어졌을 때 1과 0의 비용이 주어지지 않습니다.
// 모든 섬 사이의 다리 건설 비용이 주어지지 않습니다. 이 경우, 두 섬 사이의 건설이 불가능한것으로 봅니다.
// 연결할 수 없는 섬은 주어지지 않습니다.

function solution(n, costs) {
    let answer = 0, // return 할 cost 정보
      island = [], // 이어진 섬 정보
      bridge = [], // 지어진 다리 정보
      total = 0 //지어진 다리 갯수
  
    //최대한 적은 비용을 맞추기 위해 비용 순으로 오름차순 정렬
    costs.sort((a, b) => {
      return a[2] - b[2]
    })
  
    // 첫번째 값부터 담고 시작(가장 적은 비용이니까)
    island[costs[0][0]] = true
    island[costs[0][1]] = true
    bridge[0] = true
    answer += costs[0][2]
    total += 2
  
    //모든 다리를 다 지을때 까지
    while (total < n) {
      //전체 다리 정보를 순회
      for (let i = 1; i < costs.length; i++) {
        let [start, end, cost] = costs[i]
  
        // 1. 해당 다리를 짓지 않았고
        // 2-1. start 섬은 연결 된 상태에 end 섬은 연결 안된 경우
        // 2-2. 혹은 end 섬은 연결 된 상태에 start 섬은 연결 안된 경우
        if (
            // 1. 
            !bridge[i] &&
            // 2.
            ((island[start] && !island[end]) 
            // 3.
            || (!island[start] && island[end]))
        ) {
          //해당 섬/다리/비용 정보 추가
          // true로 변환을 할 수 있도록 정보 추가
          island[start] = true 
          island[end] = true
          bridge[i] = true
          answer += cost
          total++
          break
        }
      }
    }
  
    return answer
  }