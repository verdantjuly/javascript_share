// Collection Type (집단 자료형)
// 서로 연관이 있는 데이터끼리 모아서 관리

// 배열 (Array) : 순서 O, index 0번부터 시작
const numbers = [1, 2, 3, 4, 5]; // 리터럴 방식
console.log(numbers[0]); // index는 0번부터 시작

let array = new Array(2); // size를 2로 정의 , 생성자 클래스 방식
console.log(array); // <2 empty items>
console.log(array[0]); // undefined
console.log(array[1]); // undefined

array = new Array(1, 2, 3, 4, 5);
console.log(array);

// length - 요소 item의 개수
console.log(numbers.length);

numbers[3] = -4;
numbers[5] = 6; // 추가

console.log(numbers.length, numbers);

numbers[8] = 7; // 중간 numbers[6], numbers[7] 은 undefined로 채워짐
console.log(numbers.length, numbers);

// item 삭제
delete numbers[1]; // undefined가 된다.
console.log(numbers.length, numbers);

// Array 활용
let bts1 = ["진", "슈가", "제이홉", "RM"];
console.log(bts1);
let bts2 = new Array("지민", "뷔", "정국");
console.log(bts1.indexOf("슈가")); // 순서 알려주는 메서드, 숫자형 반환
console.log(bts2.indexOf("슈가")); // 값이 없을 때는 -1을 반환

console.log(bts1.includes("RM")); // 포함되어 있는지 아닌지 알려주는 메서드, 불리언 반환
console.log(bts2.includes("유재석"));

// 추가
bts1.push("차은우"); // 맨 뒤에 추가
console.log(bts1);
console.log(bts1.length);
bts1.unshift("이도현"); // 맨 앞에 추가
console.log(bts1);

// 삭제
let first = bts1.shift(); // 첫번째 아이템 반환하고 삭제
console.log(bts1);
console.log(first);
let last = bts1.pop(); // 마지막 아이템 반환하고 삭제
console.log(last);
console.log(bts1);

console.log("====== splice ======");

// 특정한 index에서 count만큼 삭제 splice(index,count)
const deleted = bts1.splice(1, 1); // 반환값이 있음
console.log(bts1);
console.log(deleted);

// 특정한 index에서 추가 splice(index, 0, item, item, ...)
bts1.splice(1, 0, "차은우", "이도현");
console.log(bts1);

console.log("====== slice ======");

let bts3 = bts1.slice(0, 2); // 일부분으로 새로운 배열을 만듬
console.log(bts3);
console.log(bts1);

// - 값은 뒤쪽에서부터 세는 것이 고정

bts3 = bts1.slice(-1);
console.log(bts3);
console.log(bts1);

bts3 = bts1.slice(-3);
console.log(bts3);
console.log(bts1);

// 배열 합치기

const bts = bts1.concat(bts2);
console.log(bts);

// 역순 배열

const rbts = bts.reverse();
console.log(rbts);

// 배열을 문자열로 합치기
let members = bts.join(", "); // ", " seperator
console.log(members);
