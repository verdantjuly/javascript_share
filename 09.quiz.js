// 퀴즈
// list array의 item 중에 bts 멤버만 골라 배열을
// 만들고 하나의 문자열로 만들어서 출력하시오.

const list = ["슈가", "차은우", "박서준", "이도현", "제이홉", "주우재", "지민"];
const bts = ["진", "슈가", "제이홉", "RM", "지민", "뷔", "정국"];

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
