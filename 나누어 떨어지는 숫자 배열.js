function solution(arr, divisor) {
    var answer = [];
    //나누어떨어지면 배수이므로 값담기
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    //나누어떨어지는 값이 없으면 -1담기
    if(answer.length == 0) {
      answer.push(-1);
    }
    //오름차순 정렬하기
    answer.sort((a,b) => a - b);
    return answer;
}
