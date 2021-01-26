// 문제 
// 단어 s의 가운데 글자를 반환하는 함수
// solution을 만들어보세요
// 단어의 길이가 짝수라고 한다면 가운데 두 글자를 
// 반환하면 됩니다.

// 제한사항
// s는 길이가 1이상,100이하인 스트링입니다.

function solution(s) {
    let answer = '';
    
    // 홀수일 때 
    // 홀수를 2로 나눈 나머지는 항상 1
    // 홀수의 경우 소수점이 생기기 때문에, Math 메서드로 제거한다.
    if (s.length % 2 === 1) {
        let num = Math.floor(s.length / 2);
        return s[num];
    }
    
    // 짝수일 때 
    // 짝수를 2로 나눈 나머지는 항상 2
    // 짝수일때는 가운데 두 글자를 반환해야 하기 때문에
    // 두 값을 반환해준다.
    if(s.length % 2 === 0) {
        let num = s.length / 2;
        return s[num-1] + s[num];
    }
    return answer;
}