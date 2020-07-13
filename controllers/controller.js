function addMainFormEventListener() {
    var form = document.getElementById("main_form");
    //Capturar el submit
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        var errors = 0;
        var plate = document.getElementById("plate").value; // contingut inputs cotxe
        var brand = document.getElementById("brand").value;
        var color = document.getElementById("color").value;
        console.log(plate, brand, color);
        //nueva instancia de la interfaz
        //var ui = new UI();
        //función de validación de patente
        if (plate === "") {
            errors++;
        }
        if (brand === "") {
            errors++;
        }
        if (color === "") {
            errors++;
        }
        //Validaciones primer formulario (car)
        if (errors > 0) {
            alert("Fill the fields"); //Reemplazar el alert con showMessage
            return; //no permite que se continúe con el código.
        }
        if (!validatePlate(plate)) {
            alert("Insert plate, format 1234ABC"); //Reemplazar el alert con showMessage
            return; //no permite que se continúe con el código.
        }
        //creo un nuevo objeto con la estructura de la clase Car
        car = new Car(plate, brand, color);
        ui.addCar(car);
        ui.restoreForm();
        addWheelEventLister();
        return;
    });
}
function validatePlate(e) {
    var regex = /[0-9]{4}[A-Z]{3}/g;
    return regex.test(e) ? true : false;
}
function addWheelEventLister() {
    var wheel_form = document.getElementById("wheel-form");
    //Capturar el submit
    wheel_form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();
        //Validaciones segundo formulario (wheels)
        for (var i = 1; i <= 4; i++) {
            var brand = document.getElementById("brand" + i)
                .value;
            var diam = Number(document.getElementById("diam" + i).value);
            if (diam < 0.4 || diam > 2) {
                alert("Incorrect diameter: please insert a number between 0.4 and 2");
                break;
            }
            else {
                var wheels = new Wheel(diam, brand);
                car.addWheel(wheels);
            }
        }
        ui.addWheels(car.wheels);
    });
}
//Acá enpieza el manejo del controlador
var car;
var ui = new UI();
addMainFormEventListener();
