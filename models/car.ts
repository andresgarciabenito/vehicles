class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}

/* class Car{

    constructor(plate,brand,color){
        this.plate=plate;
        this.brand=brand;
        this.color=color;

    }
} */