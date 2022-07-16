function solution(s){
    var answer = true;
    var a = s.toUpperCase();
    var p = 0;
    var y = 0;
    for (i=0; i<a.length; i++){
        if (a[i]=='P'){
            p += 1
        }else if(a[i]=='Y'){
            y += 1
        }
    }
    if (y!=p){
        answer = false
    }
    return answer;
}