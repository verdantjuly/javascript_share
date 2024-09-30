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
