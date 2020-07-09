var car: Car;

var form = document.getElementById("main_form") as HTMLFormElement;

//Capturar el submit
form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  var errors = 0;

  const plate = (document.getElementById("plate") as HTMLInputElement).value; // contingut inputs cotxe
  const brand = (document.getElementById("brand") as HTMLInputElement).value;
  const color = (document.getElementById("color") as HTMLInputElement).value;
  console.log (plate, brand, color);

  //nueva instancia de la interfaz
  const ui = new UI();

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

  if (!validatePlate(plate)){
    alert("Insert plate, format 1234ABC");                            //Reemplazar el alert con showMessage
    return; //no permite que se continúe con el código.
  }
  //creo un nuevo objeto con la estructura de la clase Car
  const car = new Car(plate, brand, color);

  ui.addCar(car);

  ui.restoreForm();
  return;
});

function validatePlate(e: any) {
  var regex = /[0-9]{4}[A-Z]{3}/g;
  return regex.test(e) ? true : false;
}

var wheel_form = document.getElementById("wheel-form") as HTMLFormElement;

//Capturar el submit
wheel_form.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  //Validaciones segundo formulario (wheels)
  for (let i = 1; i <= 4; i++) {
    let brand = (document.getElementById("brand" + i) as HTMLInputElement)
      .value;
    let diam = Number(
      (document.getElementById("diam" + i) as HTMLInputElement).value
    );

    if (diam < 0.4 || diam > 2) {
      alert ("Incorrect diameter");
      break;
    } else var wheels = new Wheel(diam, brand);
  }

  const ui = new UI();

  car.addWheel(wheels);
});