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