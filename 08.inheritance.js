// 상속

// - Super Class : 상위 클래스
// - Sub Class : 하위클래스

// 하위클래스는 상위 클래스의 모든 속성을 상속받아 사용할 수 있다.

// extends 확장한다.
// class Car extends Vehicle {}
// 뒤에오는 클래스를 확장해서 앞의 클래스를 만든다!

// super 상위 클래스의 constructor가 된다.

// =======================================================

// 상속을 받기 위한 상위 클래스(Super Class)인 Vehicle 클래스
class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }

  speedUp() {
    this.speed += 10;
  }

  speedDown() {
    this.speed -= 10;
  }
}

// 하위 클래스(Sub Class)인 Car
class Car extends Vehicle {
  constructor(speed, wheels, seats) {
    super(speed); // super은 상위 클래스의 constructor
    this.wheels = wheels;
    this.seats = seats;
  }

  drive = () => {
    console.log(`현재 속도 ${this.speed}로 운행 중입니다. `);
  };
}

// 인스턴싱
const car1 = new Car(50, 4, 2);
const car2 = new Car(20, 6, 4);

// car1과 car2는 관계가 없다.
// 서로 타입만 일치한다.
// 클래스 = 사용자 정의 타입

car1.speedUp();
car1.drive();

car2.speedDown();
car2.drive();

// 클래스 상속 실습 : 트럭 클래스
// • Car class를 상속받아서 Truck class를 정의하라.
// • 적재량을 관리하는 loadage 정수형 변수를 정의하고 초기값 0으로 설정
// • load를 화면에 인쇄하는 load 메쏘드를 정의하라.
// • unLoad를 화면에 인쇄하는 unLoad 메쏘드를 정의하라.

class Truck extends Car {
  constructor(speed, wheels, seats) {
    super(speed, wheels, seats); // Car 클래스 상속
    this.loadage = 0;
  }
  load = (ton) => {
    this.loadage = ton;
    console.log(`load ${this.loadage}tons`);
  };
  unload = () => {
    this.loadage = 0;
    console.log("unLoad");
  };
}

const t1 = new Truck(40, 8, 2);
const t2 = new Truck(40, 6, 4);

t1.load(10);
t2.unload();

// 생성자 함수 > ES6 > Class 도입
