// 문제 
// 레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를
// 극복하고자 메뉴를 새로 구성하려고 고민하고 있었습니다.
// 기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서
// 새로운  메뉴를 제공하기로 결정했습니다. 
// 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 스카피는
// 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 
// 코스요리 메뉴로 구성하기로 했습니다.
// 단 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다.
// 또한 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 
// 포함하기로 했습니다.

// 예를 들어 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면
// (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)

// 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, 
// "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때,
// "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// orders 배열의 크기는 2 이상 20 이하입니다.
// orders 배열의 각 원소는 크기가 2 이상 10 이하인 문자열입니다.
// 각 문자열은 알파벳 대문자로만 이루어져 있습니다.
// 각 문자열에는 같은 알파벳이 중복해서 들어있지 않습니다.
// course 배열의 크기는 1 이상 10 이하입니다.
// course 배열의 각 원소는 2 이상 10 이하인 자연수가 오름차순으로 정렬되어 있습니다.
// course 배열에는 같은 값이 중복해서 들어있지 않습니다.
// 정답은 각 코스요리 메뉴의 구성을 문자열 형식으로 배열에 담아 사전 순으로 오름차순 정렬해서 return 해주세요.
// 배열의 각 원소에 저장된 문자열 또한 알파벳 오름차순으로 정렬되어야 합니다.
// 만약 가장 많이 함께 주문된 메뉴 구성이 여러 개라면, 모두 배열에 담아 return 하면 됩니다.
// orders와 course 매개변수는 return 하는 배열의 길이가 1 이상이 되도록 주어집니다.

// 문제풀이 
// 메뉴에서 모든 조합을 만들고 각 조합의 개수를 세면 된다.
// 동일하게 겹치는 조합을 주의해야 한다. 이를 쉽게 해결하는 방법으로는
// 처음에 각 문자열을 알파벳 순으로 정렬하는 것이다.
// 또는 만들어진 조합의 문자열을 정렬하는 방법이다.

// 이렇게 조합별로 개수를 셌다고 한다면 최종적으로는
// 문자열의 길이가 같은 조합 중 가장 많이 나타난 조합을 찾으면 된다.

// 단품메뉴들이 문자열 형식으로 담긴 배열 : order
// 단품메뉴들의 갯수가 담긴 배열 : course

function solution(orders, course) {
  // key: 조합, value: 조합의 주문횟수
  let candidates;
  // 방문한 노드
  const seen = {};
  // 생성된 후보들을 객체로 넣기
  const answer = new Set();
  // Set(); 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있음

  // 주문을 모두 사전순으로 정렬
  orders = orders.map(order => order.split('').sort().join(''));
  // split(); 문자열을 분할하는 메서드입니다.
  // sort(); 배열 안에 있는 원소를 정렬하는 함수
  // join();  배열 안에 있는 원소들을 연결해서 하나의 값으로 만듭니다.

  for (const size of course) {
    // 조합 리셋 - course를 포함해서 반복하고 개별적으로 속성값에 대해서 
    // 실행하는 것이 있는지 size로 확인
    candidates = {};
      // 방문한 노드를 객체로 만든다.

    // 조합이 주문된 횟수를 계산
    for (const order of orders) countOrder(order, size);

    // 특정 길이를 가진 조합 중 주문횟수의 최대값을 찾음
    // keys(); candidates의 인덱스를 키 값으로 가진 새로운 배열을 반환한다.
    // reduce(); 리듀서 함수를 실행하고 하나의 결과값을 반환한다.
    // 즉 max + candidate = 값을 말한다.
    const maxCount = Object.keys(candidates).reduce((max,candidate) => {
      return Math.max(max, candidates[candidate]);
       // max + candidate = 값의 최대값과 0을 리턴한다.
    }, 0);

    // 2회 미만 주문된 후보는 제외
    if (maxCount > 1) {
      // 가장 긴 길이를 가진 후보를 `answer` 셋에 추가
      for (const candidate in candidates)
      // candidate 변수에 candidates 객체로 접근하여 반복한다.
        if (candidates[candidate] === maxCount) answer.add(candidate);
        // candidate가 maxCount와 같다면 candidate를 answer에 저장한다.
    }
  }

  // 배열로 전환하고 사전순 정렬
  return [...answer].sort();

  // 주어진 주문으로 만들 수 있는 모든 조합의 주문횟수를 계산 (백트래킹)
  function countOrder(order, courseSize, index = 0, candidate = '') {
    if (candidate.length === courseSize) {
        // candidate의 전체 길이가 courseSize와 같다면
      candidates[candidate] = candidates[candidate] + 1 || 1;
        // candidate =  candidate + 1 참이라면 반환 
      return;
    }

    for (let i = index, { length } = order; i < length; i += 1) {
        // i가 length보다 작거나 i가 i + 1을 반복한다.
      if (seen[i]) continue;
        // seen[i]가 참일때까지 다음코드 실행
      seen[i] = true;
      seen[i] = false;
      countOrder(order, courseSize, i + 1, candidate + order[i]);
        // 모든 조합의 주문횟수를 countOrder에 넣는다.
    }
  }
}
