function solution(n) {
    var answer = [];
    var a = String(n)
    for (i=0; i<a.length; i++){
        answer.unshift(Number(a[i]))
    }
    return answer;
}

// 또 다른 방법
// function solution(n) {
//     return String(n).split(‘’).reverse().map(num => num = parseInt(num));
// }
