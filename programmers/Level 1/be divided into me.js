// 문제
// array의 각 element중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 
// 배열을 반환하는 함수, solution을 작성해주세요
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아서 반환하세요

// 제한사항 
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.

function solution(arr, divisor) {
    var answer = [];
    // 전체 배열을 담는다.
    for(var i=0;i<arr.length;i++){
        // for문을 통해서 arr 요소의 길이를 구한다.
        if(arr[i] % divisor === 0) answer.push(arr[i]);
        // arr[i]와 divisor를 나눈 값이 0과 같다면 전체 배열에서 arr[i]를 뺀다.
    }
    answer.sort(function(a,b){return a-b});
    // 전체 배열에서 오름차순 정리를 하는데  “function(a,b){return a-b}"를 이용해서 sort() 오류를 없앤다.
    if(answer.length === 0) answer.push(-1);
    // divisor로 나눠서 떨어지는 숫자가 없는 경우 answer.length가 0이 되며 이때 if문을 통해서 push(-1)를 해준다.
    return answer;
}