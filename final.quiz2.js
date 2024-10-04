// 정리 퀴즈 2

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
