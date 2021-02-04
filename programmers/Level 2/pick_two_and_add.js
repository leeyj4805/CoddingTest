// 문제
// 배열 numbers가 주어지고 numbers에서 서로 다른 인덱스에 있는 두개의 수를 뽑아서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아서 return하도록
// solution함수를 완성해주세요

// 제한사항                                       
// number의 길이는 2이상 100 이하입니다.
// number의 모든 수는 0이상 100 이하입니다.

function solution(numbers) {
    const result = []
    // 1. numbers애서 서로 다른 두 수를 뽑아서 더하지만 리그가 아닌 토너먼트식 경기로 생각
    // numbers[1] + numbers[2] == numbers[2] + numbers[1]
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i+1; j < numbers.length; j++){
            // 두 인자를 더해서 sum에 저장
            const sum = numbers[i] + numbers[j]
            // 요소가 배열에 존재하는지 확인을 한 뒤 배열을 업데이트
            if(result.indexOf(sum) < 0){
                result.push(sum) // result[]에 sum값을 추가한다.
            }
        }    
    }
    // 더한 것들을 오름차순으로 정렬한다.
    result.sort((a,b)=>a-b)
    return result
}