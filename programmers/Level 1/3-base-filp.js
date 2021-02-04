// 문제
// 자연수 n이 매개변수로 주어집니다.
// n을 3진법 상에서 앞뒤로 뒤집은 후 이를 다시 
// 10진법으로 표현한 수를 return하도록 solution함수를 
// 함수를 완성해주세요

// 제한사항
// n은 1이상 100,000,000 이하인 자연수입니다.

function solution(n) {
    // Number.prototype.toString() 메서드를 사용하였다.
    // toString([radix]) 메서드의 매개변수 ([radix])는
    // 수의 값을 나타내기 위해 사용되기 위한 기준을 정하는
    // 2와 36사이의 정수이다. 즉 몇 진수로 나타낼 건지 정하는 정수이다.
    // 따라서 3진수로 먼저 변환시키고 숫자를 앞뒤로 뒤집기 위해서 
    // .split('').reverse().join('');메서드를 사용하였다
    const reversed_N = n.toString(3).split('').reverse().join('');
    // 현재 앞뒤가 뒤집힌 3진수를 나타내는 문자열을 다시 10진수 숫자로 나타내기 위해
    // parseInt() 메서드를 사용하였다. parseInt() 메서드는 문자열 인자를 구문분석하여
    // 특정 진수 (수의 진법 체계에 기준이 되는 값)의 정수를 반환한다.
    // parseInt(string, radix) 메서드는 두 개의 매개변수를 받을 수 있다.
    // 첫 번째 매개변수는 분석할 문자열이다. reversed_N
    // 두번째 매개변수는 옵션이고 어떤 진수로 값을 변환할지 정한다.
    // 단 기본값이 10이 아니다.
    const decimal = parseInt(reversed_N, 3);
    return decimal;
}