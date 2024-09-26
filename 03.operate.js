// 산술 연산자

let num1 = 5;
let num2 = 3;

console.log("-num1", -num1);
console.log("num1 + num2", num1 + num2);
console.log("num1 - num2", num1 - num2);
console.log("num1 * num2", num1 * num2);
console.log("num1 / num2", num1 / num2);
console.log("num1 % num2", num1 % num2);

// 비교 연산자
console.log(`123 == 123`, 123 == 123);
console.log(`123 == "123"`, 123 == "123");
console.log(`123 === "123"`, 123 === "123");
console.log(`123 === 123`, 123 === 123);
console.log(`123 != 123`, 123 != 123);
console.log(`123 != "123"`, 123 != "123");
console.log(`123 !== 123`, 123 !== 123);

// 논리 연산자

let num01 = 5;
let num02 = 3;
let num03 = 2;

console.log("num01 > num02 && num02 > num03", num01 > num02 && num02 > num03);
console.log("num01 == num02 && num01 > num02", num01 == num02 && num01 > num02);
console.log("num01 == num02 || num01 > num02", num01 == num02 || num01 > num02);

console.log(
  `num01 + num02 > num02 - num03 && num02 == 0`,
  num01 + num02 > num02 - num03 && num02 == 0
);
console.log(
  `num01 + num02 > num03 || num03 > 0`,
  num01 + num02 > num03 || num03 > 0
);

// 증감연산자 > 현대 코딩에서는 지양, 버그의 원인

let num = 0;
console.log(num);
num++; // a = a + 1;
console.log(num);
num--; // a = a - 1;
console.log(num);

// num++ 필요한 작업 후 값을 증가(후치)
// ++num 값을 증가후 필요한 작업수행(전치)

num = 1;
console.log(num++); // 1
num = 1;
console.log(++num); // 2

let numb = num++;
// numb는 2가 되고 혼자 num이 3이 된다
console.log(numb);
console.log(num);

// 삼항 조건 연산자

const age = 20;
const result = age > 19 ? "당신은 성인입니다." : "당신은 미성년자입니다.";
console.log(result);

// 연산자 우선 순위

let a = 2;
let b = 3;
let result2 = a + (b * 4) / 5;
console.log(result2);
result2 = ((a + b) * 4) / 5;
console.log(result2);
result2 = a++ + b * 4; // 후치, 연산이 된 후에 1을 더한다.
console.log(result2);
console.log(a);
