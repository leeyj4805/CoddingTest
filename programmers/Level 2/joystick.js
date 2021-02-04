// 문제 

// 조이스틱으로 알파벳 이름을 완성하세요 
// 맨 처음에는 A로 이루어져 있습니다.
// 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 다음과 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동

// 만들고자 하는 이름 name이 매개변수로 주어질 때 이름에 대해 조이스틱 조작 횟수의 최솟값을 return하도록
// solution 함수를 만드시오

// 제한 사항
// name은 알파벳 대문자로만 이루어져 있습니다.
// name의 길이는 1이상 20이하 입니다.

// charCodeAt()- index에 해당하는 문자의 unicode값을 리턴
// ?.은 앞의 평가 대상이 undefined나 null이면 평가를 멈추며 undefined를 반환합니다.
// Math.min() 함수는 주어진 숫자들 중에서 가장 작은 수를 반환합니다.

function solution(name) {
    let answer = 0;
    let temp=[];
    // temp라는 배열을 만듬
    for(let i=0;i<name.length;i++) {
        // name 전체 길이를 for문으로 돌림 0에서부터 시작
        temp.push('A');
        // temp라는 빈 배열에 A를 추가함
        let diff=name[i].charCodeAt()-temp[i].charCodeAt();
        // diff는 name의 유니코드 값을 리턴 - temp의 유니코드 값을 리턴
        answer += diff>13 ? 26-diff:diff;


    }
    let minMove=name.length-1;
    // minMove가 name이라는 전체 길이에서 -1을 뺀 값이다.
    for(let i=1;i<name.length;i++){
        // name 전체 길이를 for문으로 돌림 1에서부터 시작
        if(name[i]==='A'){
            // name이 A와 같다면
            for(var j=i+1;j<name.length;j++){
                // i에서+1을 더한 name의 전체 길이를 포문을 돌린다.
                if(name[j]!=='A') break;
                // 만일 j가 A가 아니라고 한다면 멈춘다.
            }
            const left=i-1;
            // left가 i-1이라면
            const right=name.length-j;
            // right는 전체 길이에서 j를 뺀 값.
            minMove=Math.min(minMove,left>right ? left+right*2:left*2+right);
            // left가 right보다 크다고 하면 left+ right*2 는 left*2+ right를 minMove에 반환한다.
            // 그리고 그 중에서 가장 작은 값을 반환한다.
            i=j;
        } 
    }
    return answer+minMove;
    // answer+minMove값을 리턴한다.
}