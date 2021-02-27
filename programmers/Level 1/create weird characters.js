// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로,홀수반째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수
// solution을 완성하세요

// 제한사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로
// 짝/홀수 인덱스를 판단해야 합니다.
// 첫 번째 글자는 0번째 인덱스로 보아서 짝수번째 알파벳으로 처리해야 합니다.


function solution(s) {
    let answer = ''; // 공백
    let num = 0; // 공백 구분
    let sl = s.length; // 전체 문자열
    
    for (let i = 0; i< sl; i++) {
        let str = s.charAt(i);
        // charAt();는 인수번째의 문자를 읽어냅니다.
        // 즉 i번째의 문자를 읽어냅니다.
        if(str == " ") {
            // str이 공백이라면
            answer += str;
            // answer+str을 더한 값이 된다.
            num = 0;
            // 비교값 초기화
        } else {
            answer += num %2 == 0 ? str.toUpperCase(): str.toLowerCase();
            // 짝수일 때 문자열을 대문자로 변환한다.
            // 그렇지 않은 경우 소문자로 변환한다. 
            num++; // 비교값 증가
        }
    }
    return answer;
}