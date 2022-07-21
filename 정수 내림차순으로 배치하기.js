//너무 무식하게 나열하기
function solution(n) {
    var answer = '';
    var str = String(n);
    var lst = []
    for(i=0;i<str.length;i++){
        lst.push(str[i])
    }
    lst.sort()
    var lst_b = []
    for(i=0;i<lst.length;i++){
        lst_b.unshift(lst[i])
    }
    for(i=0;i<lst_b.length;i++){
        answer += lst_b[i]
    }
    return Number(answer);
}

//매서드 이용한 다른 방법
function solution(n) {
    var answer = 0;
   //마지막에 넘버로 바꿔준다 //쪼개기위해 문자열로 //그 후 배열로 // 내림차순위해 정렬->거꾸로 //조인으로 다시 문자열
    a = Number(n.toString().split("").sort().reverse().join(""));
                //"118372"//"1"...
    return answer += a;
}
