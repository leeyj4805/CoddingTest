// 문제 

// Leo는 카펫을 사러 갔다가 중앙에는 노란색으로 칠해져 있고 
// 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

// Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠한
// 격자의 개수는 기억했지만 전체 카펫의 크기는 기억하지 못했습니다.
// 갈색 격자의 수 brown,노란색 격자의 수 yellow가 매개변수로 주어질 때 
// 카펫의 가로,세로 크기를 순서대로 배열에 담아 return하도록 
// solution함수를 작성하시오

// 제한사항
// 갈색 격자의 수 brown은 8이상 5,000이하인 자연수입니다.
// 노란색 격자의 수 yellow는 1이상 2,000,000이하인 자연수입니다.
// 카펫의 가로 길이는 세로 길이와 같거나 세로 길이보다 깁니다.


function solution (brown, red) {
    let answer = [];
    let brlag = false; // 정답을 구한 경우 loop에서 나오기 위한 변수

    // 가로길이를 1부터 red 길이까지 loop
    for (let i = 1;i <= red; i++) {
        // 세로길이를 1부터  가로길이까지 loop
        for(let j = 1; j <= i; j++) {
            const size = i * j; // red의 갯수를 계산
            if(red === size){
            // red와 같은 경우 
                if(brown === (((i+2) + 2)+(j*2))){ 
                    // brown의 갯수와 같은지 판단
                    answer = [i+2,j+2]; // brown.의 경우 red를 감싸는 형태로 존재해야 함
                    bflag = true; // 가로길이 loop를 break
                    break;
                }
            }
        }
        if (bflag) break;
    }

    return answer
}