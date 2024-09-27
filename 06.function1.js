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
