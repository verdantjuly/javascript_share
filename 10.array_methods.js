// ====== map ======

let nums = [1, 2, 3, 4, 5];
// 고차원 함수인 map은 함수를 인자로 받음
const doubled = nums.map((num) => {
  return num * 2;
});
console.log(doubled);
// 출력: [2, 4, 6, 8, 10]

// ====== filter =======
nums = [1, 2, 3, 4, 5];
const evenNumbers = nums.filter((num) => {
  //결과가 true이면 통과
  return num % 2 === 0;
});
console.log(evenNumbers);
// 출력: [2, 4]

// ======= reduce ========

nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); //초기값
console.log(sum); // 출력: 15
