function solution(price, money, count) {
   let tp = 0;
    //반복문 통해서 총액 구하기
    for(let i=0; i<=count; i++){
        tp += price*i
    }
    //모자라는 금액 계산
    if(tp > money){
        return tp -= money
    } else //모자라지 않으면 0 출력
        return 0
}
