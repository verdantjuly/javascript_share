// 함수 만드는 규칙
// function 함수명(){}

function sayHello() {
  console.log("Hello");
}

// 중괄호 : 함수 바디 = 코드 블럭

// 함수의 호출 -> 함수명()
sayHello();

// . 은 현재 디렉터리
// .. 은 상위 디렉터리
// 콘솔 = 터미널
// 터미널 > 방향키 위 키 : 직전 명령어 사용하기

// 함수의 장점
// 1. 재사용성 -> 여러번 호출 가능
sayHello();
sayHello();
sayHello();

// add 함수의 진화 ㅏ

// 1+2만 가능
function add() {
  console.log(1 + 2);
}

add();

// 전달하는 매개변수에 따라 다양한 결과를 출력
function add1(num1, num2) {
  console.log(num1 + num2);
}

add1(4, 5);
add1("Hello", "World");
add1("Hello", 100);

function sayHello1(name, age) {
  // 템플릿 리터럴
  // ` 문자열 ~~  ${함수, 변수 등} `
  // ` 백틱으로 부름

  console.log(`안녕하세요, 저는 ${age} 세 ${name} 입니다.`);
}

function sayHello2(name) {
  console.log(`안녕하세요, 저는  ${name} 입니다.`);
}

sayHello1("손흥민", 31);
sayHello1("우영우", 20);

// 구구단 출력
function multiple() {
  for (let dan = 2; dan <= 9; dan = dan + 1) {
    console.log(`==== ${dan} 단 ====`);
    for (let num = 1; num <= 9; num = num + 1) {
      console.log(`${dan} X ${num} = ${dan * num}`);
    }
  }
}

multiple();

// 선택한 단만 구구단 출력
function multiple1(dan) {
  console.log(`--- ${dan}단 ---`);
  for (let num = 1; num <= 9; num = num + 1) {
    const result = `${dan} X ${num} = ${dan * num}`;
    console.log(result);
  }
}

multiple1(5);
multiple1(19);

// 19단 구구단
function multiple2(dan, max) {
  console.log(`   ${dan}단   `);
  for (let num = 1; num <= max; num++) {
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

multiple2(1, 19);

// 하나의 함수가 여러 일을 하면 안 됨 -> 쪼개야 함
// 함수를 쪼개게 되면 return 해서 중간 결과를 전달해야 함

// 함수는 한 가지의 기능을 하게만 만든다.

function add2(x) {
  return 3 * x + 5;
  // return 은 함수를 종료한다. = 제어권을 반환한다. 제어권을 뒤쪽으로 넘긴다.
}

function multiply(x, y) {
  return x * y;
}

let x = add2(5);
let y = add2(10);
let result = multiply(x, y);
console.log(result);

function calcGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}

const grade = calcGrade(45);
console.log(grade);

function calc(num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

console.log(calc(1, "+", 2));

// 변수에 함수 할당하기
const aaa = sayHello;

// ==========================================================
// 어려운 내용이므로 이 박스 안에 있는 것은 건너뛰어도 됩니다.
// ==========================================================

// Heap 영역 : 객체들이 만들어지는 영역 -> 함수 객체가 만들어진다.
// Stack 영역 : 20

// 참조형 (reference type) : 메모리의 주소값을 갖고 있다. 주소를 가리킨다.
// 값형 (value type)

// ==========================================================

// 매개변수에도 함수를 보낼 수 있다.

function getData() {
  // 시간 많이 걸린다고 가정 ( 예 : 인터넷에서 데이터를 받아온다. 디비에서 데이터를 읽어온다.)
  // 이러한 프로그래밍은 비동기 프로그래밍으로 작성
  for (let i = 0; i < 9999; i = i + 1) {}
  return "data";
}

function handler(callback) {
  let result = getData();
  callback(result);
}

handler(sayHello);
handler(sayHello1); // undefined : 매개변수를 주지 않아서
handler(calc); // undefined : 매개변수를 주지 않아서

handler(sayHello2);

// 함수를 매개변수로 쓰는 예시
// 1. 비동기 프로그래밍 : 시간이 오래 걸리는 작업
// 2. 라이브러리 제작 : 사용자가 원하는 함수로 변경하기 위해

// 더하기 함수를 매개변수로 쓰는 계산기
function calc2(num1, opFunc, num2) {
  return opFunc(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

result = calc2(1, add, 2);
console.log(`연산의 결과는 ${result}입니다. `);

// (n1 * n1 + n2) / n1 + n2 를 계산하는 함수를 사용하고 싶어
// 라이브러리 개발자 : 그럼 네가 만들어~

function operation(n1, n2) {
  return (n1 * n1 + n2) / n1 + n2;
}

result = calc2(2, operation, 4);
console.log(`연산의 결과는 ${result}입니다. `);

// 다양한 함수 정의 방식

// 함수 선언문
function add01(n1, n2) {
  return n1 + n2;
}
console.log(add01(1, 2));

// 함수 표현식
let add02 = function (n1, n2) {
  return n1 + n2;
};
console.log(add02(1, 2));

// 화살표 함수
let add03 = (n1, n2) => {
  return n1 + n2;
};
console.log(add03(1, 2));
