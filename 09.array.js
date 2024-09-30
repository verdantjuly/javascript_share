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
bts1 = ["지민", "뷔", "RM", "정국"];
bts2 = ["제이홉", "슈가", "진"];
const bts = bts1.concat(bts2);
console.log(bts);

// 역순 배열
const rbts = bts.reverse(); // 배열의 순서를 바꾸고 바꾼 값의 참조를 반환
console.log(rbts);

// 배열을 문자열로 합치기
let members = bts.join(", "); // ", " seperator
console.log(members);

console.log("====== sort ======"); // ASCII (아스키) 코드 기준으로 정렬
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const numbersSort = [40, 100, 1, 5, 25, 10];
numbersSort.sort();
console.log(numbersSort); // 숫자도 문자열 순서로 나옴

// 숫자 오름차순
// n1 - n2 > 0 이면 자리 바꿈
numbersSort.sort((n1, n2) => n1 - n2);
console.log(numbersSort);

// 숫자 내림차순
// n2 - n1 > 0 이면 자리 바꿈
numbersSort.sort((n1, n2) => n2 - n1);
console.log(numbersSort);

// Array 활용
const items = [
  { name: "Apple", price: 50 },
  { name: "Banana", price: 10 },
  { name: "Mango", price: 30 },
];

items.sort((a, b) => a.price - b.price);
console.log(items);

items.sort((a, b) => b.price - a.price);
console.log(items);

// Array 순회
const bangtan = ["RM", "진", "슈가", "제이홉", "지민", "뷔", "정국"];

// for 사용

for (let i = 0; i < bangtan.length; i++) {
  console.log(bts[i]);
}

// for ~ of 사용
for (const member of bts) {
  console.log(member);
}

// forEach 사용
bts.forEach((member, index, array) => {
  console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${member}입니다.`);
});

// forEach 사용 : member 사용 안 할 때 _로 생략
bts.forEach((_, index, array) => {
  console.log(`전체 ${array.length}명중에 ${index}번째 멤버 ${_}입니다.`);
});
