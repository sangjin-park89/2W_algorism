function solution(n) {
    var answer = 0;
    var x = 1
    while(x<=n){
        if(n/x == x){
            answer += (x+1)**2
            break
        }else{
            x += 1
            if(n == x){
                answer -= 1
                break
            }
        }
    }
    return answer;
}