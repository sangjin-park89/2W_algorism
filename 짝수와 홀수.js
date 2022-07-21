function solution(num) {
    var answer = '';
    if(num%2==0){
        answer += "Even"
    }else{
        answer += "Odd"
    }
    return answer;
}

//반대로 하게 되면 오류가 뜨는데 -1과 같은 숫자때문
// -1 % 2 = -1
