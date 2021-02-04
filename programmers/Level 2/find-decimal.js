// 문제

// 한 자리 숫자가 적힌 종이조각이 흩어져 있습니다.
// 흩어진 종이 조각을 붙여서 소수를 몇 개 만들 수 있는지 알아내려 합니다.
// 각 종이 조각에 적힌 숫자가 적힌 문자열인 numbers가 주어졌을 때 
// 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution함수를 완성하세요

// 제한사항

// numbers는 길이 1 이상 7이하인 문자열입니다.
// numbers는 0~9까지 숫자만으로 이루어져 있습니다.
// "013"은 0,1,3 숫자가 적힌 종이 조각이 흩어져 있다는 의미입니다.


// tip: permutation을 구하기 위해 recursive(재귀 함수)를 사용하고 에라토스테네스 체를
// 이용하여 prime의 여부를 가립니다.
function solution(numbers) {
    let answer = 0

    // 1
    const permutation = recursive(numbers.split(''))
        // permutation(순열)을 통해서 모든 경우의 수 리스트를 구하고 
    const filtered = [... new Set(permutation)]
        // array -> set -> array를 통해서 중복된 항목을 걸러냅니다.
    // 2
    const max = Math.max(...filtered)
        // setdmfh filter된 리스트에서 max값을 통해서 
    const eNet = eNetFilter(max)
        // 에라토스테네스 체를 만듭니다.
    // 3
    filtered.forEach(filtered_num => {
        if(eNet[filtered_num]===true) answer++
        // 리스트의 아이템마다 소수 (prime)여부를 확인한 후 answer 값을 증가시킵니다. 
    })
    // 4 
    function eNetFilter(max) {
        // max 정수를 받습니다.
        let net = new Array(max + 1).fill(true)
        net[0] = false
        net[1] = false
        // max까지의 에라토스테네스 체 배열을 만들어 리턴을 합니다.
        for (let i =2;i < max + 1; i++) {
            if(net[i] === true) {
                for (var j = i+ i; j < max + 1; j+=i) net[j] = false
            }
        }
        return net
    }
    // 5
    function recursive(arr, prefix) {
        // 순열을 통해서 모든 경우의 수를 고려하기 위해서 
        // 제귀함수를 사용합니다.
        let _prefix = prefix || ''
        return arr.reduce((acc, cur, idx) => {
            // 첫번째 인덱스부터 요소를 하나씩 뺍니다-reduce.(cur)   
            acc.push(Number(_prefix + cur))
            // 순열 리스트 (acc)에 넣고
            // 픽스 (_prefix + cur) 시킵니다.
            const remainList = [...arr]
            // 고정된 리스트의 이외를 인자로 하여
            remainList.splice(idx,1)
            const remain = recursive(remainList,_prefix + cur)
            // recursive 함수를 콜합니다.
            acc.push(...remain)
            return acc
            // return 합니다.
        }, [])
    }

    return answer
}