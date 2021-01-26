// 문제

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을때 
// k번째에 있는 수를 구하려 합니다.
// array가 [1,5,2,6,3,7,4],i=2,j=5,k=3이라면
// 1.array의 2번째부터 5번째까지 자르면 [5,2,6,3]입니다.
// 2.1에서 나온 배열을 정렬하면 [2,3,5,6]입니다.
// 3.2에서 나온 배열의 3번째 숫자는 5입니다.

// array[i,k,k]를 원소로 가진 2차원 배열인 commands가 매개변수로 
// 주어질 때 commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 
// 나온 결과를 배열에 담아서 return하도록 solutution함수를 작성하시오

// 제한사항
// array의 길이는 1이상 100이하입니다.
// array의 각 원소는 1이상 100이하입니다.
// commands의 길이는 1이상 50이하입니다.
// commands의 각 원소는 길이가 3입니다.


function solution(array, commands) {
    let newArr=[];
      // 반환되어야 할 배열 newArr를 선언한다.
    for(let i=0; i<commands.length; i++){
        // commands의 길이만큼 for loop를 돈다.
        let arr =array.slice(commands[i][0]-1,commands[i][1]);
        // slice메서드를 이용하여 i번째와 j번째 사이의 배열로 자르고 난 뒤 
          arr.sort(function(a,b){
              //sort 메서드를 사용해서 순차적으로 정리한다.
            return a-b;
        });
        newArr.push(arr[commands[i][2]-1]);
        //for 루프를 돌떄마다 newArr에서 k번째 수를 push해서 넣어준 뒤
    }
      return newArr;
      // newArr를 반환한다.
  }