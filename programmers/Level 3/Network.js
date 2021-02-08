// 문제 
// 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 상태를 의미합니다.
// 컴퓨터의 개수 N,연결에 대한 정보가 담긴 이차원 배열을 computers가 매개변수로 주어질 때, 네트워크 개수를 
// return하도록 solution 함수를 작성하시오.

// 제한사항 
// 컴퓨터의 개수 n은 1이상 200이하인 자연수 입니다.
// 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
// i번 컴퓨터와  j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
// computer[i][i]는 항상 1입니다.

function dfs(start, computers, visited) {
    visited[start] = 1 //방문한 곳으로 남김
    for (let i = 0; i < computers.length; i++) {
      if (!visited[i] && computers[start][i]) {
        //해당 위치에서 다음 네트워크로 갈 수 있는 경우
        dfs(i, computers, visited) //다음 네트워크 탐색
      }
    }
  }
  
  function solution(n, computers) {
    var answer = 0,
      visited = []
  
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        //첫 방문일 경우
        answer++ //네트워크 추가
        dfs(i, computers, visited) //해당 부분부터 탐색
      }
    }
    return answer
  }