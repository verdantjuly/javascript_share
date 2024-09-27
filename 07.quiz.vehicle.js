class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  increase() {
    this.speed = this.speed + 10;
  }
  decrease() {
    this.speed = this.speed - 10;
  }
  info() {
    console.log(`현재 속도는 ${this.speed} 입니다.`);
  }
}

const car = new Vehicle(10);

car.increase();
car.info();
