// 입출력 예는 다 통과했는데 문제를 다 틀린 답
function solution(arr) {
    let st = arr.sort(function(a,b){b-a});
    let idx = arr.length -1;
    // answer.splice(idx,1)
    let answer = st.filter((el)=>el!=st[idx])
    if(idx==0){
        answer.push(-1)
    }
    return answer;
}