// 함수
// 데이터를 받아 처리하고 내보내는 코드의 모음인 함수에 대해 알아봅시다.

function sayHello(name) {
  console.log(`Hello ${name}`);
} // 함수 정의
sayHello("이다영"); // 함수 호출

function sayHelloToValue(value) {
  console.log(`Hello ${value}`);
}

function printRestParameters(...parameters) {
  console.log(parameters);
}

function printParameters(param1, param2, ...parameters) {
  console.log(param1);
  console.log(param2);
  console.log(parameters);
}

sayHelloToValue("이다영");
sayHelloToValue(1);
printRestParameters(1, 2, 3);
printParameters(1, 2, 3, 4, 5);

function sayHi(name) {
  console.log(`Hi ${name}`);
}

function greet(name, callback) {
  callback(name);
}

greet("우영우", sayHello);
greet("우영우", sayHi);

// 일회용 함수는 화살표 함수로 활용한다.
let add3 = (n1, n2) => {
  return n1 + n2;
};
