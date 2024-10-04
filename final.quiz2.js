// 정리 퀴즈 2
// 사칙연산을 담당하는 각각의 함수를 정의하고
// 정의된 함수들을 매개변수로 전달받아서
// 처리하는 calc2 함수를 정의하고 호출하시오.

const add = function (a, b) {
  return a + b;
};
const substract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const calc2 = function (a, callback, b) {
  const result = callback(a, b);
  console.log(result);
};

calc2(7, add, 2);

calc2(7, (a, b) => a + b, 2);
