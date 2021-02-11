// 문제 
// 각 기능은 진도가 100%일때 서비스에 반영할 수 있습니다.
// 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 
// 먼저 개발이 될 수 있고 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 
// 배포가 됩니다.
// 먼저 배포가 되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 
// 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 
// 몇 개의 기능이 배포되는지를 return하도록 solution 함수를 완성하시오.

// 제한사항
// 작업의 개수 (progresses,speeds 배열의 길이)는 100개 이하입니다.
// 작업 진도는 100 미만의 자연수 입니다.
// 작업 속도는 100 이하의 자연수 입니다.
// 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이어진다고 가정합니다.
// 예를 들어서 진도율이 96%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

function solution(progresses, speeds) { //현재 작업률-index가 작을 수록 우선순위 높음, 진행속도 배열
    let answer = []; //정답을 담을 배열
    let need_days = []; //작업을 완료하기 위한 day를 담는 배열
    
    const len = progresses.length; // progresses의 길이를 len에 담는다.  (작업의 진도)

    // 날짜를 구하는 for문
    for (let i = 0; i < len; i ++) {
        //1. 작업을 완료하기 위한 날짜를 구하여 need_days 배열에 담는다.(소수점 올림((Math.ceil)하여 처리)
        // 작업의 갯수가 100 이하이므로 전체 100 - (전체 길이 / 전체 속도)<-날짜
        need_days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let count = 0; //배포 시의 기능 개수
    let max = 0; //작업의 필요한 Day중 가장 큰 값을 담는 변수
    need_days.forEach((value, index) => {
        //배포 가능한 경우
        if (value > max) {
            max = value;
            //index-0인 경우 배포하지 않음
            if (index > 0) {
                answer.push(count);
                count = 0;
            }
        }
        count++;
    })
    //마지막 배포 Day에 대한 기능 갯수를 넣어줌
    //forEach에 할 시 index를 조건문으로 체크해야 하므로 현재 배열의 길이만큼 계속 체크하는 오버헤드 존재
    answer.push(count);   
    
    return answer;
}
