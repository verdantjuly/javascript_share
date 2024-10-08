// Quiz
// • 운송수단을 의미하는 Vehicle 클래스를 정의하라.
// • 속도를 관리하는 speed라는 속성을 정의하라.
// • speed를 10 증가하는 메쏘드를 정의하라.
// • speed를 10 감소하는 메쏘드를 정의하라.
// • 현재 속도를 표기하는 info 메쏘드를 정의하라.

class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  increaseSpeed() {
    this.speed += 10;
  }

  // 클래스 안에서 화살표 함수의 this는 만들어지는 인스턴스를 뜻한다
  decreaseSpeed = () => {
    this.speed -= 10;
  };
  info() {
    console.log(`현재 속도는 ${this.speed} 입니다.`);
  }
}

const car = new Vehicle(10);

car.increaseSpeed();
car.info();
