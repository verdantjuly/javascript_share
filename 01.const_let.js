// 변수를 선언하는 방법에 대해 알아 봅시다.
// 자바스크립트에서는 대표적으로 변수를 const와 let을 이용하여 선언합니다.

// const 재선언 불가능 재할당 불가능
// let   재선언 불가능 재할당 가능
// var   재선언 가능  재할당 가능  (스코프의 범위 때문에 자주 이용하지 않습니다.)

const age = 20;
console.log("나이는 " + age);
// age = 21;

let grade = 3;
let year;
console.log(grade, year);

year = 4;
year = 11;
console.log(age, year, grade);
console.log("나이는 " + age + "세이고 학년은 " + grade + "학년입니다.");
console.log(`나이는 ${age}세이고 학년은 ${grade}학년입니다.`);
