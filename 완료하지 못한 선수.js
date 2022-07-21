//1개의 요소를 1개와 대조하는 방식으로 효율성 통과
function solution(pa, co) {
    pa.sort();
    co.sort();
    for(i=0; i<pa.length; i++){
        if (pa[i] != co[i]){
            return pa[i]
        }
    }
}

// // 중복 값이 모두 삭제되서 불합격
// function solution(pa, co) {
//     var answer = 0;
//     var obj_p = [...new Set(pa)];
//     var obj_c = [...new Set(co)];
//     answer = obj_p.filter(people => !obj_c.includes(people));
//     return answer[0]
// }

// // 효율성 불합격
// function solution(pa, co) {
//     for (i=0; i<co.length; i++){
//             var idx = pa.indexOf(co[i])
//             pa.splice(idx,1)
//     }
//     return pa[0];
// }


function solution(participant, completion) {
    var answer = '';
    //sort를 해야 배열 페어를 맞출수 있음
    completion.sort();
    participant.sort();
   
    //반복문을 돌려서 서로 다른값이 나올때 참가자를 확인, pa의 길이까지 하는 이유는 마지막에 완주못한 선숙가 올 수 있기때문
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]){
             answer += participant[i]
            return answer;
          
        }
    } 
}
