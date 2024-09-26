console.log("=========== for문 ============");

//   초기화 영역   조건문     실행
for (let i = 1; i <= 100; i = i + 1) {
  console.log(i);
}

console.clear();

// 중첩 루프는 조심해서 써야 한다.

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`(${i},${j})`);
  }
}

console.log("=======while문=======");

let age = 0;
let num = 0;

while (age < 5) {
  while (num < 10) {
    console.log(`나이 ${age} 숫자 ${num}`);
    num = num + 1;
  }
  num = 0;
  age = age + 1;
}

console.log("=======do while문=======");
// 1번은 무조건 실행. 먼저 있기 때문
num = 0;
do {
  console.log(num);
  num = num + 1;
} while (num < 10);

// 횟수가 중요하면 for루프, 조건이 중요하면 while을 사용

console.log("======= break =========");

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    break;
  }
  console.log(`${i} was executed!`);
}

num = 0;
while (num < 10) {
  console.log(`${num} was executed!`);
  if (num == 3) {
    break;
  }
  num = num + 1;
}

console.log("======= continue =========");

for (let i = 0; i < 10; i++) {
  if (i == 2) {
    continue;
  }
  console.log(`${i} was executed!`);
}

// while (num < 10) {
//   if (num == 4) {
//     console.log(`${num} was executed!`);
//     continue;
//   }
//   num = num + 1;
// }
