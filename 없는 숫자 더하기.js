// 0~9를 모두 더한 수에서 numbers의 총 합을 빼기
function solution(numbers) {
    var answer = 45;
    for ( i = 0 ; i < numbers.length ; i++ ){
        answer -= numbers[i]
    }
    return answer;
}

// numbers의 전부를 돌아보기
function solution(numbers) {
    var answer = 0;
    console.log()
    for(let i=0; i<=9; i++){
        if(numbers.includes(i)!=true){
            answer += i
        }
    }
    return answer;
}