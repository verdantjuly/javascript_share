// 구구단의 단을 매개변수로 전달받아 출력하는 함수를 정의하고 호출하시오.

function multiplier(dan) {
  console.log(`=== ${dan}단 ===`);
  for (i = 1; i <= 9; i = i + 1) {
    console.log(`${dan} X ${i} = ${dan * i}`);
  }
  console.log();
}

multiplier(3);
