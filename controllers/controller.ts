//Acá enpieza el manejo del controlador
var car: Car;
var ui = new UI();
addMainFormEventListener();


function addMainFormEventListener(){
  var form = document.getElementById("main_form") as HTMLElement;
  //Capturar el submit
  form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      var errors: number = 0;
      var plate: string = (document.getElementById("plate") as HTMLFormElement).value; // contingut inputs cotxe
      var brand: string = (document.getElementById("brand") as HTMLFormElement).value;
      var color: string = (document.getElementById("color") as HTMLFormElement).value;
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

function validatePlate(e: any) {
  var regex = /[0-9]{4}[A-Z]{3}/g;
  return regex.test(e) ? true : false;
}

function addWheelEventLister(){
  var wheel_form = document.getElementById("wheel-form") as HTMLFormElement;
  //Capturar el submit
  wheel_form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();
      //Validaciones segundo formulario (wheels)
      for (var i = 1; i <= 4; i++) {
          var brand = (document.getElementById("brand" + i) as HTMLInputElement)
              .value;
          var diam =  Number(
            (document.getElementById("diam" + i) as HTMLInputElement).value
          );
      
          if (diam < 0.4 || diam > 2) {
              alert("Incorrect diameter: please insert a number between 0.4 and 2");
              break;
          }
          else {
              var wheels = new Wheel(diam, brand);
              car.addWheel(wheels);
              
          }
      }
      ui.addWheels(car);    

  });
}

