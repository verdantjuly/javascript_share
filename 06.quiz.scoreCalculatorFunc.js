// 점수(score)를 매개 변수로 전달받아
// 학점(A,B~F)을 반환하는 함수를 정의하고 여러번 호출하시오.

function scoreCalculator(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}

console.log(scoreCalculator(90));
console.log(scoreCalculator(80));
console.log(scoreCalculator(70));
console.log(scoreCalculator(60));
console.log(scoreCalculator(50));
console.log(scoreCalculator(40));
