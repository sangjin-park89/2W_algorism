function solution(n) {
    var answer = 0;
    let th = n.toString(3);
    let lst = [];
    for (let i=0; i<th.length; i++) {
        lst.unshift(th[i]);
    }
    let come = lst.join('');
    answer += Number.parseInt(come, 3)
    return answer;
}
