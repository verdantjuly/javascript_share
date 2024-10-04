// 정리 퀴즈 3
// 1~10까지의 숫자 중에 3의 배수만 골라서 2배한 후 합을 구하시오.

function cal() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = array
    .filter((num) => num % 3 == 0)
    .map((num) => num * 2)
    .reduce((acc, curr) => acc + curr);
  console.log(result);
}
cal();
