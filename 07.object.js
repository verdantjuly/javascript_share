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

// 객체 내부의 속성에 접근할 때는 '.', 또는 ["속성명"]을 사용
person.age = 20;
person["name"] = "장원영";
// person은 안 바뀌고 객체의 속성만 바뀜

console.log(person.name, person["age"]);
person.greet();
