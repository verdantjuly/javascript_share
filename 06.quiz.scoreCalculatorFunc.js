// 점수(score)를 매개 변수로 전달받아
// 학점(A,B~F)을 반환하는 함수를 정의하고 여러번 호출하시오.

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
scoreCalculator(80);
scoreCalculator(70);
scoreCalculator(60);
scoreCalculator(50);
scoreCalculator(40);
