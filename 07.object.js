// Object 객체

// 데이터와 기능을 한데 묶어 관리할 수 있는 중요한 자료형
// 객체는 키(Key)와 값(Value)의 쌍으로 구성
// 키(Key)와 값(Value)를 Object의 속성이라고 함
// 함수(Function)을 Value로 가질 수 있음
// 객체 내의 정의된 함수를 메서드(Method)라고 함

// 형태
// const obj = {key : "value"}

// 사전과 비슷하다고 생각하면 된다. key를 알면 value를 뽑아낼 수 있다.

// 연관성 있는 것끼리 객체로 묶자.

// 리터럴 = 값

const person = {
  name: "홍길동",
  age: 30,
  greet: function () {
    // this는 현재의 object 자신을 의미함
    console.log("Hello, " + this.name);
  },
};

// 객체는 Heap 영역에 만들어진다.

person.greet();

// 객체 내부의 속성에 접근할 때는 '.', 또는 ["속성명"]을 사용
person.age = 20;
person["name"] = "장원영";
// person은 안 바뀌고 객체의 속성만 바뀜

console.log(person.name, person["age"]);
person.greet();

// Student 객체 만들기 실습
// 이름 학년 번호 info 함수
// info : n학년 n반 n번 ㅇㅇㅇ입니다.

const student = {
  grade: 2,
  class: 9,
  number: 11,
  name: "김철수",
  info: function () {
    console.log(
      `${this.grade}학년 ${this.class}반 ${this.number}번 ${this.name}입니다.`
    );
  },
};

student.info();

// info 함수를 화살표 함수로 쓰면 this가 없어서 undefined가 나옴
// 나중에 설명해 주심

// 객체의 속성 추가
person.job = "축구선수";
console.log(person.job);

person.info = function () {
  console.log(`이름은 ${this.name} 이고 직업은 ${this.job} 이다.`);
  console.log(`이름은 ${person.name} 이고 직업은 ${person.job} 이다.`);
};
person.info();

// 객체의 속성 삭제
delete person.age;
console.log(person.age);

// 생성자 함수
// 생성자 함수명은 대문자로 쓴다.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello " + this.name);
  };
}

const person1 = new Person("차은경", 30);
const person2 = new Person("조유리", 20);

person1.greet();
person2.greet();

// Student 생성자 함수 만들기 실습
function Student(name, grade, className, number) {
  this.name = name;
  this.grade = grade;
  this.className = className;
  this.number = number;
  this.info = function () {
    console.log(
      `안녕하세요 저는 ${grade}학년 ${className}반 ${number}번 ${name}입니다.`
    );
  };
}

const student1 = new Student("이다영", 1, 3, 15);
const student2 = new Student("김철수", 1, 3, 5);

student1.info();
student2.info();

// class 사용

class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello " + this.name);
  }
}

// person3은 Person1 클래스의 인스턴스
const person3 = new Person1("화사", 30);
person3.greet();

class Student1 {
  constructor(name, grade, className, number) {
    this.name = name;
    this.grade = grade;
    this.className = className;
    this.number = number;
  }
  info() {
    console.log(
      `안녕하세요 저는 ${this.grade}학년 ${this.className}반 ${this.number}번호 ${this.name}입니다.`
    );
  }
}

const student3 = new Student1("윤여정", 3, 4, 23);
student3.info();
