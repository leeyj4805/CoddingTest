function solution(strings, n) {
    let answer = [];
    // 배열을 담는다.
    strings.sort(function(a,b) {
        // sort함수로 문자열을 오름차순 정렬을 한다.
        let first = a[n];
        // 첫번째 숫자를 a[n]으로 담는다.
        let second = b[n];
        // 두번째 숫자를 b[n]으로 담는다.
        if(first === second) {
            // n번째 문자가 같은 경우
            return (a > b) - (a < b);
            // 매개변수로 받은 a,b 문자열 전체를 비교한다.
        } else {
            // n번째 문자가 같지 않다면
            return (first > second) - (first < second);
            // 일반적인 sort함수처럼 작동한다.
            // 앞에 숫자가 크면 1을 반환하고
            // 뒤의 숫자가 크면 -1을 반환한다.
        }
    })
    return strings;
    // string 문자열을 리턴한다.
}