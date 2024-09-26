// 두 수와 연산자(String형)를 입력받아서
// 사칙연산 후 결과를 반환하는 함수를 만드시오.

function calculator(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      console.log("연산할 수 없는 연산자입니다.");
  }
  console.log(`${num1} ${operator} ${num2} = ${result}`);
  return result;
}

calculator(2, 4, "*");
