function sayHello() {
  console.log("Hello");
} // 함수 정의
sayHello(); // 함수 호출

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
