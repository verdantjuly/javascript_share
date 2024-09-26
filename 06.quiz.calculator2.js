// 사칙연산을 담당하는 각각의 함수를 정의하고
// 정의된 함수들을 매개변수로 전달받아서
// 처리하는 calc2 함수를 정의하고 호출하시오.

function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, callback, num2) {
  const result = callback(num1, num2);
  console.log(`계산 결과는 ${result}입니다.`);
}

calculator(1, add, 4);
