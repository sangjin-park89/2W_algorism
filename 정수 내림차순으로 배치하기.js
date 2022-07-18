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
