function solution(num) {
    var answer = '';
    if(num%2==0){
        answer += "Even"
    }else{
        answer += "Odd"
    }
    return answer;
}

//반대로 하면 안되는 케이스가 있음
//-1 % 2 = -1임을 생각하면 된다. 
//반대로 하게 되면 오류가 뜨는데 -1과 같은 숫자때문
// -1 % 2 = -1
