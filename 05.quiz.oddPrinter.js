// for루프, continue, %(나머지 연산자)를 이용해서 0~10 사이의 홀수를 출력하라.

function oddPrinter() {
  console.log("========  for 문 =========");

  for (i = 0; i <= 10; i = i + 1) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
  }

  console.log("========  while 문 =========");

  let num = 0;

  while (num < 10) {
    if (num % 2 == 0) {
      num = num + 1;
      console.log(num);
      continue;
    }
    num = num + 1;
  }
}

oddPrinter();
