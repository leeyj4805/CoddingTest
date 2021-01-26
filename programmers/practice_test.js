// 문제 

// 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
// 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.
// 1번 수포자가 찍는 방식 1,2,3,4,5,1,2,3,4,5...
// 2번 수포자가 찍는 방식 2,1,2,3,2,4,2,5,2,1,2,3,2,4,2,5,...
// 3번 수포자가 찍는 방식 3,3,1,1,2,2,4,4,5,5,3,3,1,1,2,2,4,4,5,5,...
// 1번 문제부터 마지막 문제까지 정답이 순서대로 들은 배열이 
// answers가 주어졌을 때 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아서 
// return하도록 solution 함수를 작성해주세요

// 제한 조건
// 시험은 10,000문제로 구성되어 있습니다.
// 문제의 정답은 1,2,3,4,5 중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우 return하는 값을 
// 오름차순 정렬해주세요

function solution(answers) {
    let soo1 = [1,2,3,4,5]; // 수포자 1
    let soo2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 수포자 2
    let soo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 수포자 3
    // 수포자 1~3을 배열로 만들어준다.
    let count = [0,0,0];
    // 정답수를 카운터 해줄 count 배열을 만들어준다.

    for (let i = 0;i<answers.length;i++) {
        // answers 정답 답안지를 for loop를 돌린다.
        if(soo1[i % soo1.length] === answers[i]) {
            // answers 정답 인덱스와 수포자 1의 인덱스가 같을 때 
            count[0]++;
            // count 0번 인덱스를 올린다.
        };
        if(soo2[i % soo2.length] === answers[i]) {
             // answers 정답 인덱스와 수포자 2의 인덱스가 같을 때 
            count[1]++;
            // count 1번 인덱스를 올린다.
        };
        if(soo3[i % soo3.length] === answers[i]) {
            // answers 정답 인덱스와 수포자 3의 인덱스가 같을 때 
            count[2]++;
            // count 2번 인덱스를 올려준다.
        };
    };
    let max = Math.max(...count);
    // count를 올려준 배열들을 최대치 max를 만들어준다.
    let result = [];
    // 결과를 반환할 result라는 새로운 배열을 선언한다.
    for(let j = 0;j<answers.length;j++) {
        if(count[j] === max) {
            // count 배열이 최대치 값 max와 같을 때 
            result.push(j+1);
            // i는 0부터 시작하므로 + 1을 더해 result에 더해준 뒤 반환한다.
        };
    };

    return answer;
};