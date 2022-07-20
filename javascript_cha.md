// 자바스크립트

## 호이스팅과 TDZ는 무엇일까?

### 스코프
- 변수가 선언되는 범위에 따라서 참조할 수 있는 구역이 나누어지는 것
- 예) 전역 스코프(전역 변수)는 어디서든 참조 가능, 지역 스코프(지역 변수)는 함수 자신과 하위 함수에서 참조 가능
```(javascript)
// test1은 아래 function안에서도 참조 가능
const test1 = '전역 변수';
function temp() {
  //test2는 function 바깥쪽에서는 참조 불가능
  let test2 = '지역 변수';
  };
```

### 호이스팅(hoisting)
- 함수의 코드를 실행하기 전에 변수와 함수의 메모리 공간을 선언 전에 미리 할당하여 변수의 선언을 최상단으로 끌어올리는 것
- 예) 함수가 선언되기 전에 호출하는 코드를 먼저 배치하지만, 정상적으로 실행되는 것을 볼 수 있다.
```(javascript)
name1('상진'); // '제 이름은 상진입니다.'
function name1(name2) {
  console.log('제 이름은 '+ name2 +'입니다.');
  }
```
- 이는 변수 선언 형식에 따라 달라진다.
- var : 호이스팅 시 undefined로 변수를 초기화
- function : 선언된 위치와 상관없이 동일하게 호출됨
- let, const : 호이스팅 시 변수를 초기화하지 않음. (호이스팅 대상은 맞음)
- 예)
```(javascript)
console.log(test1); // 호이스팅한 var 선언으로 인해 undefined 출력
var test1; // 선언
test1 = 'test1' // 초기화

console.log(test2); // ReferenceError : test2 is not defined
let test2 = 'test2'

name1('상진'); // '제 이름은 상진입니다.'
function name1(name2) {
  console.log('제 이름은 '+ name2 +'입니다.');
  }
```

### TDZ(Temporal Dead Zone, 일시적 사각지대)
