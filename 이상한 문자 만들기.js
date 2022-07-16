function solution(s) {
    let arr = s.split(' ');
    return arr.map(a => {
      let str = '';
      for(let i=0; i<a.length; i++) {
        if(i % 2 == 0) {
          str += a[i].toUpperCase();
        } else {
          str += a[i].toLowerCase();
        }
      }
        return str;
    }).join(' ');
}