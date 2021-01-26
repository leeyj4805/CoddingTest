// 문제 

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열인 
// participant와 완주한 선수들의 이름이 담긴 배열인
// completion이 주어질 때, 완주하지 못한 선수의 이름을
// return하도록 solution 함수를 작성해주세요 

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion 의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.


function solution(participant,completion) {
    participant.sort(); // 참가자 배열 정렬
    completion.sort(); // 완주자 배열 정렬

    for(let i =0;i<participant.length;i++) {
        // index 0부터 순차적으로 두가지 배열을 비교한다.
        if(participant[i] !== completion[i]) {
            // 참가자와 완주자를 비교해서 불일치가 나온다면
            return participant[i];
            // 비완주자가 참가자 배열에 나올 경우 출력한다.
        }
    }
}
