// 프로퍼티 값 단축 구문

let id = "p-0001";
let price = 30000;

let product = {
    id : id,
    price : price
};
console.log(product);

console.log("-----------------------------");

// ES6 단축 문법
let product2 = {id,price};
console.log(product2);

console.log("-----------------------------");

// 메소드 단축

let dog = {
    name : "흰둥이",
    eat : function(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹습니다.`);
    }
};

dog.eat("고구마");

console.log("-----------------------------");

let dog2 = {
    name : "뽀삐",
    eat(food) {
        console.log(`${this.name}는 ${food}를 맛있게 먹습니다.`);
    }
};
dog2.eat("감자");

console.log("-----------------------------");

