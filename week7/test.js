class Car {
    constructor(color, numberOfWheels) {
        this.color = color;
        this.numberOfWheels = numberOfWheels;
    }
}

const car = new Car('green', 5);
console.log(car);
const car2 = new Car('red', 4);
console.log(car2);

const cars = [
    {
        color: 'red',
    },

    {
        color: 'blue',
    }
];
console.log(cars);

function getBlueCars(car) {
    console.log(car);
    if(car.color === 'blue') {
        return true;
    }
}

const blueCars = cars.filter(getBlueCars);
console.log(blueCars);

