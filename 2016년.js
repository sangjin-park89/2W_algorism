function solution(a, b) {
    var answer = '';
    var day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    var mon = [31,29,31,30,31,30,31,31,30,31,30];
    var cnt = 0 + b;
    for (i=0; i<a-1; i++){
        cnt += mon[i]
    }
    answer = day[cnt%7]
    return answer;
}

// function solution(a, b) {
//     return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
// }
