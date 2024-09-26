// 구구단을 이중 for루프를 이용해서 출력하시오.

function multiplier() {
  console.log("지금부터 구구단을 출력합니다.");

  for (i = 2; i <= 9; i = i + 1) {
    console.log(`======= ${i}단 =======`);
    for (j = 1; j <= 9; j = j + 1) {
      console.log(`${i} X ${j} = ${i * j}`);
    }
    console.log();
  }
}
multiplier();
