function solution(x) {
    var answer = true;
    var a = x.toString();
    var plus = 0;
    for(i=0;i<a.length;i++){
        plus += Number(a[i]);
    }
    if(x%plus!=0){
        answer = false;
    }
    return answer;
}