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
