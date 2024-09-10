// 프로퍼티 접근

let dog = {
    name : "뽀삐",
    eat : function(food) {
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
};

dog.eat("사료");

console.log("-----------------");

let obj = {
    'dash-key' : 'dash-key',
     
};

// 식별자 네이밍 규칙
// 허용되는 문자
// 영문자, 숫자(첫 글자는 올 수 없음)
// 예약어는 사용할 수 ㅇ벗음
// 대소문자를 구분함
// 카멜케이스로 작성함

console.log(obj['dash-key']);
// console.log(obj.dash-key);

console.log(obj[0]);
console.log(obj['0']);
// console.log(obj.0);

console.log("-----------------");

