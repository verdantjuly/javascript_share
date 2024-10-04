// 정리 퀴즈 1
// for 루프, continue, %(나머지 연산자)를 이용해서 0~10 사이의 홀수를 출력하라.

function oddPrinter() {
  for (i = 0; i <= 10; i = i + 1) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }
}

oddPrinter();
