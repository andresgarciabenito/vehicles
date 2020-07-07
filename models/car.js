var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
/* class Car{

    constructor(plate,brand,color){
        this.plate=plate;
        this.brand=brand;
        this.color=color;

    }
} */ 
