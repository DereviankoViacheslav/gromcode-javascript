class Vehicle {

    constructor(name, numberOfWheels) {
        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {
        console.log(`${this.name} is moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }
};

class Ship extends Vehicle {

    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels);
        this.maxSpeed = maxSpeed;
    }

    start() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    }

    stop() {
        super.stop(),
        console.log(`${this.name} lifting anchor down`);
    }
};

export {
    Vehicle,
    Ship
};
