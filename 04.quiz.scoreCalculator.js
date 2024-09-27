// 퀴즈
// 주어진 score에 따라서 학점(A,B~F)을 출력하는 조건문(if~else if) 를 이용해서 작성하기

function scoreCalculator(score) {
  console.log("주어진 점수에 따른 학점을 출력합니다.");
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else if (score >= 50) {
    console.log("E");
  } else {
    console.log("F");
  }
}

scoreCalculator(90);
