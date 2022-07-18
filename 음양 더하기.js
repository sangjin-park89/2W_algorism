<<<<<<< HEAD
function solution(absolutes, signs) {
    var answer = 0;
    for (i = 0 ; i < absolutes.length ; i++){
        if (signs[i] == false) {
            answer += absolutes[i]*-1
        }else {
            answer += absolutes[i]
        }
    }
    return answer;
=======
function solution(absolutes, signs) {
    var answer = 0;
    for (i = 0 ; i < absolutes.length ; i++){
        if (signs[i] == false) {
            answer += absolutes[i]*-1
        }else {
            answer += absolutes[i]
        }
    }
    return answer;
>>>>>>> a8ce554a23cbd8e9e588bcd3d820722c5b68194f
}