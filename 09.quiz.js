// 퀴즈
// list array의 item 중에 bts 멤버만 골라 배열을
// 만들고 하나의 문자열로 만들어서 출력하시오.

const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];

// 생각의 순서

// includes를 이용해 리스트 안의 아이템이 bts인지 판단
// list 순회
// bts면 결과값인 result 배열에 push로 담기
// 담기 위에 상단에 result 빈 배열 선언

// 결론 : 1. list를 순회하며 if문과 includes를 이용해 멤버가 bts인지 판단
//       2. bts이면 result에 push 하기,
//       3. push한 배열을 join 하여 문자열로 만들기

//

function findBts(list, bts, callback) {
  const result = [];
  for (const member of list) {
    if (bts.includes(member)) {
      result.push(member);
    }
  }
  callback(result);
}

function joinAndPrint(array) {
  console.log(array.join(" "));
}

findBts(list, bts, joinAndPrint);
