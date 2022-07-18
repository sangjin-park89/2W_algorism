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