// 문제 

// 배열 arr이 주어집니다. 배열 arr의 각 원소는 숫자 0에서부터 9까지로 이루어져 있습니다.
// 이 때 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// arr = [1,1,3,3,0,1,1]이면 [1,3,0,1]을 return합니다.
// arr = [4,4,4,3,3] 이면 [4,3]을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return하는 solution 함수를 완성해주세요

// 제한사항 
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수


// Type 1
function solution(arr){
    // 배열 arr를 이용해서 
    let answer = [];
    for (let i=0; i<arr.length; i++){
        // for반복문을 이용해 전체 배열을 반복한다.
        if(arr[i] !== arr[i+1]) {
            // 그 중에서 if 조건문을 통해서 접근한 인덱스가 다음에 오는 인덱스 값과 비교해서 
            answer.push(arr[i]);
            // 그 인수를 push()를 이용해서 answer 배열에 삽입한다.
        } 
    }
    return answer;
}

// Type 2
    // 파라미터로 들어오는 배열 arr에서 연속적으로 나타나게 되는 숫자를 
    // 하나만 남기고 전부 제거해서 연속되는 숫자가 없는 배열을 반환하는 문제입니다.

function solution(arr) {

    return arr.filter((el, index) => el !== arr[index-1]);
    // arr.filter() 함수 안에서 첫번째 Parameter(el)는 각 요소를 뜻합니다.
    // 두번째 Parameter(index)는 각 요소의 index를 말합니다.
    // 결론적으로 첫번째 el과 index가 서로 같은지 (true, false값)을 반환해주는 코드를 만든다.
    // arr에서 연속적으로 나타내는 숫자를 하나만 남기게 되고
    // 전부 제거한 연속되는 숫자들이 없는 배열이 만들어지게 됩니다.
    // 그렇게 하고 나머지를 반환시키면 됩니다.
}