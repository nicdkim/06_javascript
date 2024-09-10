// 논리 연산자
// ||, &&, !

// OR, AND 연산자 표현식의 결과가 때로는 불리언이 아닐 수 있다.

console.log('apple' || 'banana');
console.log(false || 'banana');

console.log("--------------------------");

console.log('apple' && 'banana');
console.log(false && 'banana');

console.log("--------------------------");

let num = 1;

if(num % 2 == 0) {
    console.log("짝수입니다.")
} else {
    console.log("홀수입니다.")
}

num % 2 == 0 && console.log("짝수입니다.");
num % 2 == 0 || console.log("홀수입니다.");

console.log("--------------------------");

let obj = null;
// 객체라고 기대하는 변수가 null 또는 undefined일 때
let val = obj && obj.value;
