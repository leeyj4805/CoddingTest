
// 문제 
// 게임 화면은 1x1 크기의 칸들로 이루어진 NxN 크기의 정사각 격자이며
// 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. 
// 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 
// 인형을 집어 올릴 수 있습니다.
// 집어 올린 인형은 바구니에 쌓이게 되는데 
// 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
// 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면
// 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.
// 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 
// 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는
// 아무런 일도 일어나지 않습니다.

// 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 
// 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개 변수로 주어질 때 
// 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 갯수를 
// return하도록 solution 함수를 완성해주세요 

// 제한사항
// board 배열은 2차원 배열로 크기는 5X5 이상 30 X 30 이하입니다.
// board의 각 칸에는 0 이상 100이하인 정수가 담겨있습니다.
// 0은 빈 칸을 나타냅니다.
// 1~100의 각 숫자는 각기 다른 인형의 모양을 의미하며 같은 숫자는 같은 모양의 인형을 나타냅니다.
// moves 배열의 크기는 1이상 1000이하입니다.
// moves 배열 각 원소들의 값은 1 이상이며 board 배열의 가로 크기 이하인
// 자연수입니다.


function solution(board, moves) {
    let result = 0;
    let size = board.length;
    let num = 0;
    let pocket = [];
    moves.forEach(move=>{
        let cnt = 0;
        while(true){
            
            if (board[cnt][move-1] !== 0){
                // 바구니에 인형이 있는데 잡은 인형과 같으면 터트린다
                if (pocket.length !== 0 && pocket[pocket.length-1] === board[cnt][move-1]){
                    pocket.pop();
                    result += 2;
                }else{
                // 그렇지 않다면 잡아서 옮긴다
                    pocket.push(board[cnt][move-1]);
                }
                board[cnt][move-1] = 0;
                break;
            }
            cnt ++;
            if(cnt === size)
                break;
        }
    })
    return result;
}