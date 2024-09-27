// 퀴즈
// Rest 로 전달되는 매개변수들의 합계를 구해서
// 반환하는 sum2 함수를 정의하고 여러번 호출하시오.

function sum2(...numbers) {
  return numbers.reduce((acc, current) => acc + current);
}

console.log(sum2(1, 2, 3));
