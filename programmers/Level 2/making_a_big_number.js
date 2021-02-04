// 문제 
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
// 예를 들어서 숫자 1924에서 수 두 개를 제거하면 [19,12,14,92,94,24]를 만들 수 있습니다.
// 이 중에서 가장 큰 숫자는 94입니다.

// 문자열 형식으로 숫자 number와 제거할 수 있는 수의 개수가 solution 함수의 
// 매개변수로 주어집니다. number에서 k개의 수를 제거했을 때 만들 수 있는 수 중
// 가장 큰 숫자를 문자열 형태로 return하도록 solution 함수를 완성하세요.

// 제한 조건 
// number는 1자리 이상 1,000,000자리 이하인 숫자입니다.
// k는 1이상 number의 자릿수 미만인 자연수입니다.

// && : 논리and 연산자 expr 1 && expr 2 -> expr 1을 true로 변환할 수 있는 경우 expr2를 반환하고 그렇지 않으면 expr1을 반환한다.
// || : 논리or 연산자 expr 1 || expr 2 -> expr 1을 true로 변환할 수 있으면 expr1을 반환하고 그렇지 않으면 expr2를 반환합니다.
// split() : 문자열을 separator로 잘라서 limit크기 이하의 배열에 잘라진 문자열을 리턴한다.
// join() : 메서드는 배열의 모든 요소를 연결해서 하나의 문자열로 만듭니다.

function solution(number, k) {
    let stack = []; // b : 최종 글자들이 저장될 스택
    for (let i = 0; i < number.length; i++) { // 모든 숫자 비교
        let now = number[i]; // 현재 인덱스 숫자. 처음에는 그냥 push
        while (k > 0 && stack[stack.length - 1] < now) {
            // 현재 인덱스 숫자인 now보다 작을 경우 실행된다.
            // stack이라는 배열 안에 길이가 이전 인덱스보다 크면 pop()으로 넣어주고 k를 -1 감소한다.
            stack.pop();
            k--;
        }
        stack.push(now);
    }
    // k가 0일 경우 스택은 그대로,
    // but k가 남아있으면 뒤에서부터 제거해준다. (ex. 1010,2 -> 11)
    stack.splice(stack.length - k, k);
    var answer = stack.join('');
    // 배열의 모슨 요소를 연결해서 하나의 문자열로 만든 후 리턴
    return answer;
}