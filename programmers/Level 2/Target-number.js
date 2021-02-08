// 문제 
// n개의 음이 아닌 정수가 있습니다. 
// 이 수를 적절하게 더하거나 빼서 타겟 넘버를 만들려고 합니다.
// [1,1,1,1,1]로 숫자 3을 만들기 위해서는 다음 다섯 방법을 쓸 수 있습니다.
//-1+1+1+1+1 = 3
// +1-1+1+1+1 = 3
// +1+1-1+1+1 = 3
// +1+1+1-1+1 = 3
// +1+1+1+1-1 = 3
// 사용할 수 있는 숫자가 담긴 배열을 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
// 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return하도록 solution 함수를 작성하시오.

// 제한사항
// - 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
// - 각 숫자는 1이상 50이하인 자연수입니다.
// - 타겟 넘버는 1이상 1000이하인 자연수입니다.

function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    function dfs(index, sum) {
        if(index === numbers.length) {
            if (sum === target) {
                answer++;
             }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        // dfs(index + 1, sum + numbers[index]); 부분이 계속 실행되면서 
        // 다음 인덱스의 숫자가 + 인 자식 노드를 탐색한다.
        dfs(index + 1, sum - numbers[index]);
        // 마지막 인덱스에 다다랐을 경우 (index = 5, sum = 5 일 때)
        // 해당 함수를 스택에서 제거한 뒤 index가 4일 때 
        // dfs(index + 1, sum - numbers[index]);을 실행하여 -인 자식 노드를 탐색한다.
    }
    
    // 이 과정을 계속 해서 다 탐색을 하면 해당 함수가 종료된다.
    return answer;
}