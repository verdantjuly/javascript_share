// Collection Type (집단 자료형)
// 서로 연관이 있는 데이터끼리 모아서 관리

// 배열 (Array) : 순서 O, index 0번부터 시작
const numbers = [1, 2, 3, 4, 5]; // 리터럴 방식
console.log(numbers[0]); // index는 0번부터 시작

let array = new Array(2); // size를 2로 정의
console.log(array); // <2 empty items>
console.log(array[0]); // undefined
console.log(array[1]); // undefined

array = new Array(1, 2, 3, 4, 5);
console.log(array);

// length - 요소의 개수
console.log(numbers.length);
