// Finn은 요즘 수학공부에 빠져 있습니다.
// 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
// 예를 들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.
// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15

// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 제한사항
// n은 10,000 이하의 자연수 입니다.

const solution = n => {
    let answer = 0;
    // 1~n까지의 수
    const arr = Array(n).fill(1).map((v, i) => v + i);
    // 연속한 자연수들의 시작 인덱스
    let start = 0;
    // 인덱스는 주어진 수-1까지 존재
    while (start < n) {
        // 연속한 자연수의 합
        let sum = 0; 
        for (let i = start; i < arr.length; i++) {
            sum += arr[i];
            // 연속한 자연수의 합이 n이 되면 answer ++하고 종료
            if (sum === n) {
                answer++;
                break;
            }
            // 연속한 자연수의 합이 n보다 커지면 종료
            if (sum > n) {
                break;
            }
        }
        start++;
    }

    return answer;
};