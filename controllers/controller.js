//Capturar el submit
document.getElementById('car-form').addEventListener('submit', function () {
    var plate = document.getElementById('plate').value;
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    //console.log (plate, brand, color);
    //creo un nuevo objeto con la estructura de la clase Car
    var car = new Car(plate, brand, color, wheels);
    //nueva instancia de la interfaz
    var ui = new UI();
    //función de validación de patente
    function validatePlate(e) {
        var regex = /[0-9]{4}[A-Z]{3}/g;
        return regex.test(e) ? true : false;
    }
    //Validaciones primer formulario (car)
    if (plate === "" || brand === "" || color === "") {
        alert("Fill the fields"); //Reemplazar el alert con showMessage   
        return; //no permite que se continúe con el código. 
    }
    else if (!validatePlate(plate)) {
        alert("Insert plate, format 1234ABC"); //Reemplazar el alert con showMessage
        return;
    }
    ui.addCar(car);
    ui.restoreForm();
    return;
});
//Capturar el submit del segundo form (wheels)
document.getElementById('wheel-form').addEventListener('submit', function () {
    //Validaciones segundo formulario (wheels)
    for (var i = 1; i <= 4; i++) {
        var brand = document.getElementById("brand" + i);
        var diam = document.getElementById("diam" + i);
        if (diam.value < 0.4 || diam.value > 2) {
            alert("Incorrect diameter (wheel "(i) + ")");
            break;
        }
        else
            var wheels = new Wheel(brand, diam);
    }
    var ui = new UI();
    ui.addWheels(wheels);
    //evitar que se resetee el formulario(acción por defecto)
    event.preventDefault();
});
