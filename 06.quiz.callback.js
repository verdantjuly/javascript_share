// calc2 함수를 호출할때 화살표 함수를 사용해서 호출하시오.

function calc2(num1, num2) {
  return num1 * num2;
}

const cal1 = () => {
  console.log(calc2(1, 2));
};

cal1();
