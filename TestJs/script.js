'use strict';
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const car1 = new Car('bmw', 120);
const car2 = new Car('mer', 95);

console.log(car2.brake());
console.log(car2.brake());
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  set make(make) {
    this._make = make;
  }

  get make() {
    return this._make;
  }

  accelerate() {
    return this.speed + 10;
  }

  brake() {
    return this.speed - 5;
  }
}
const car1 = new Car('BMW', 23);
console.log(car1.make);
*/
/*
class carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    return (this.speed += 10);
  }

  brake() {
    return (this.speed -= 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new carcl('bmw', 120);
console.log(car1.accelerate());
console.log(car1.speedUS.__proto__);

car1.speedUS = 30;
console.log(car1);
*/

//CONSTRUCTOR FUNCTION INHERITANCE
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  return (this.speed += 10);
};
Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
const carEv = new Ev('tesla', 120, 70);
carEv.chargeBattery(36);
console.log(carEv);
console.log(carEv.brake());

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  return `tesla is going @ ${this.speed} km/h , with charge of ${this.charge} `;
};

const car1 = new Car('tesla', 120);
console.log(car1);
console.log(car1.accelerate());
console.log(car1.accelerate());

console.log(carEv);
//carEv.chargeBattery = 55;
console.log(carEv);

console.log(carEv.accelerate());
console.log(carEv.accelerate());
console.log(carEv.accelerate());
console.log(carEv.accelerate());
console.log(car1.accelerate());
