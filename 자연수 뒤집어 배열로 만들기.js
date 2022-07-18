function solution(n) {
    var answer = [];
    var a = String(n)
    for (i=0; i<a.length; i++){
        answer.unshift(Number(a[i]))
    }
    return answer;
}