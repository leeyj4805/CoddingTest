// 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다.
// 중요한 문서나 나중에 인쇄될 수 있습니다.
// 이정 문제를 보완하기 위해서 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다.
// 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
// 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
// 3. 그렇지 않으면 J를 인쇄합니다.
// 4개의 문서(A, B, C, D)가 순서대로 인쇄 대기목록에 있고 중요도가 2 1 3 2 라면 C D A B 순으로 인쇄하게 됩니다.
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 알고 싶습니다. 위의 예에서 C는 1번째로, A는 3번째로 인쇄됩니다.
// 현재 대기목록에 있는 문서의 중요도가 순서대로 담긴 배열 priorities와 내가 인쇄를 요청한 문서가 현재 대기목록의 어떤 위치에 있는지를 알려주는 location이 매개변수로 주어질 때,
// 내가 인쇄를 요청한 문서가 몇 번째로 인쇄되는지 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 현재 대기목록에는 1개 이상 100개 이하의 문서가 있습니다.
// 인쇄 작업의 중요도는 1~9로 표현하며 숫자가 클수록 중요하다는 뜻입니다.
// location은 0 이상 (현재 대기목록에 있는 작업 수 - 1) 이하의 값을 가지며 대기목록의 가장 앞에 있으면 0, 두 번째에 있으면 1로 표현합니다.

function solution(priorities, location) {
    let answer = 0;
    // priorities 배열의 인덱스를 요소로 갖는 prints 배열 선언
    let prints = priorities.map((_, i) => i);
    
    // prints 배열에 요소가 있을 동안 탐색
    while(prints.length > 0){
    	// tmp: prints의 맨 앞 요소(=priorities의 인덱스)
        let tmp = prints.shift();
        // priorities 배열 요소 중 priorities[tmp]보다 큰 우선순위가 있다면
        for(let i = 0; i < priorities.length; i++){
            if(priorities[i] > priorities[tmp]){
            	// prints 배열 앞에서 빼냈던 tmp를 push로 뒤에 넣는다
                prints.push(tmp);
                break;
            }
        }
        // 만약 prints 배열에서 tmp가 삭제됐다면
        if(!prints.includes(tmp)){
            // priorities 배열의 tmp 번째 인덱스를 -1로 채워넣고(작은 숫자가 우선순위 낮음)
            priorities.fill(-1, tmp, tmp + 1);
            // 삭제된 요소가 있기 때문에 answer에 +1 해준다
            answer++;
            // tmp가 location와 동일할 경우 answer 반환
            if(tmp === location){
                return answer;   
            }
        }
    }
}