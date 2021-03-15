// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최댓값을 찾아 이를 "(최소값) (최대값)" 형태의
// 문자열을 반환하는 함수,solution을 완성하세요
// 예를 들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고 "-1-2-3-4"라면 "-4-1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

// split(); 문자열을 분할하는 메서드이다.
// push(); 배열의 끝에 하나 이상의 요소를 추가하고 배열의 새로운 길이를 반환합니다.
// Math.min() 주어진 숫자들 중 가장 작은 값을 반환합니다.
// Math.max() 주어진 숫자들 중 가장 큰 값을 반환합니다.
// join(); 배열의 원소들을 연결하여 하나의 값으로 만듭니다.

function solution(s) {
  let answer = '';
  let answerArr = []; 
  let arr = s.split(' ');
  
  answerArr.push(Math.min(...arr));
    // 최소값
  answerArr.push(Math.max(...arr));
    // 최댓값
  answer = answerArr.join(' ');
  return answer;
}