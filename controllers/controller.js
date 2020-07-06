class Car{

    constructor(plate,brand,color){
        this.plate=plate;
        this.brand=brand;
        this.color=color;
        
    }
}

class Wheel{

    constructor(brand1, diam1, brand2, diam2, brand3, diam3, brand4, diam4){
        this.brand1=brand1;
        this.diam1=diam1;
        this.brand2=brand2;
        this.diam2=diam2;
        this.brand3=brand3;
        this.diam3=diam3;
        this.brand4=brand4;
        this.diam4=diam4;
    }
}


//Definimos una clase para interfaz (interactúa con el HTML)
class UI {

    addCar(car){
    //accedo al div 
    const carList=document.getElementById('car-details');
    const element=document.createElement('div');
    element.innerHTML=`
    <div class="card text-center mb-4">
    <h6 class="text-success mt-2">New Car created<h6>
        <div class="card-body">
            <div class="row justify-content-around">
              <div class="col-4">
                    <strong>Plate:</strong> ${car.plate}
              </div>
              <div class="col-4">
                    <strong>Brand:</strong> ${car.brand}
              </div>
              <div class="col-4">
                    <strong>Color:</strong> ${car.color}
              </div>
            </div>
        </div>
    </div>
    `;
    carList.appendChild(element);
    }

    restoreForm(){
    const cardBody=document.getElementById('car-form');
    $("#car-form").empty();
    const newForm=document.createElement('form');
    newForm.innerHTML=`
        <h5>Step 2. Add wheels</h5>
    <div class="form-group">
        <label>Wheel 1</label>
        <div class="row justify-content-around">
        <input type="text" id="brand1" placeholder="brand" class="form-control col-5">
        <input type="number" step="0.1" id="diam1" placeholder="diameter" class="form-control col-5">
        </div>
    </div>
    <div class="form-group">
        <label>Wheel 2</label>
        <div class="row  justify-content-around">
        <input type="text" id="brand2" placeholder="brand" class="form-control col-5">
        <input type="number" step="0.1" id="diam2" placeholder="diameter" class="form-control col-5">
        </div>
    </div>
    <div class="form-group">
        <label>Wheel 3</label>
        <div class="row  justify-content-around">
        <input type="text" id="brand3" placeholder="brand" class="form-control col-5">
        <input type="number" step="0.1" id="diam3" placeholder="diameter" class="form-control col-5">
        </div>
    </div>
    <div class="form-group">
        <label>Wheel 4</label>
        <div class="row  justify-content-around">
        <input type="text" id="brand4" placeholder="brand" class="form-control col-5">
        <input type="number" step="0.1" id="diam4" placeholder="diameter" class="form-control col-5">
        </div>
    </div>
    <input type="submit" value="ADD WHEELS" class="btn btn-warning btn-block">
        `;
    cardBody.appendChild(newForm);
    }

/*     showMessage(message, cssClass){
        const div=document.createElement('div');
        div.className='mt-2 alert alert-${cssClass}';
        div.appendChild(document.createTextNode(message));

        const container=document.querySelector('.container');
        const app=document.querySelectorAll('#app');
        //mostrar el div, dentro de container, antes de app
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('alert').remove();
        }, 4000);
    } */
    
    addWheels(fourwheels){
        //accedo al div 
        const carList2=document.getElementById('car-details');
        const element2=document.createElement('div');
        element2.innerHTML=`
        <div class="card text-center mb-4">
        <h6 class="text-success mt-2">Wheel details<h6>
        <div class="card-body">
            <div class="row">
            <div class="col">
              <h6>Wheel 1</h6>
              <strong>Brand 1:</strong> ${fourwheels.brand1} <br>
              <strong>Diam. 1:</strong> ${fourwheels.diam1} <br>
            </div>
            <div class="col">
              <h6>Wheel 2</h6>
              <strong>Brand 2:</strong> ${fourwheels.brand2} <br>
              <strong>Diam. 2:</strong> ${fourwheels.diam2} <br>
              
            </div>
            <div class="col">
            <h6>Wheel 3</h6>
              <strong>Brand 3:</strong> ${fourwheels.brand3} <br>
              <strong>Diam. 3:</strong> ${fourwheels.diam3} <br>
              
            </div>
            <div class="col">
              <h6>Wheel 4</h6>
              <strong>Brand 4:</strong> ${fourwheels.brand4} <br>
              <strong>Diam. 4:</strong> ${fourwheels.diam4} <br>
            </div>  
        </div>
        </div>
        </div>
        `;
        carList2.appendChild(element2);
        }

}


//Capturar el submit
document.getElementById('car-form').addEventListener('submit', function(){
const plate=document.getElementById('plate').value;
const brand=document.getElementById('brand').value;
const color=document.getElementById('color').value;
//console.log (plate, brand, color);

//creo un nuevo objeto con la estructura de la clase Car
const car= new Car (plate, brand, color);
//nueva instancia de la interfaz
const ui= new UI();

//función de validación de patente
function validatePlate (e){
    var regex=/[0-9]{4}[A-Z]{3}/g;
    return regex.test(e)?true:false;
}

//Validaciones primer formulario (car)

if (plate===""||brand===""||color===""){
  alert("Fill the fields");                                         //Reemplazar el alert con showMessage   
  return; //no permite que se continúe con el código. 
}else if(!validatePlate(plate)){
  alert("Insert plate, format 1234ABC");                            //Reemplazar el alert con showMessage
  return;
}

ui.addCar(car);
ui.restoreForm();
//evitar que se resetee el formulario(acción por defecto)
event.preventDefault();

});


//Capturar el submit del segundo form (wheels)
document.getElementById('car-form').addEventListener('submit', function(){
const brand1=document.getElementById('brand1').value;
const diam1=document.getElementById('diam1').value;
const brand2=document.getElementById('brand2').value;
const diam2=document.getElementById('diam2').value;
const brand3=document.getElementById('brand3').value;
const diam3=document.getElementById('diam3').value;
const brand4=document.getElementById('brand4').value;
const diam4=document.getElementById('diam4').value;

const fourwheels= new Wheel(brand1, diam1, brand2, diam2, brand3, diam3, brand4, diam4)
const ui= new UI();

//Validaciones segundo formulario (wheels)


if (diam1.value<0.4||diam1.value>2){
    alert("Incorrect diameter (wheel 1)");                                     
    return; //no permite que se continúe con el código. 
  }else if (diam2.value<0.4||diam2.value>2){
        alert("Incorrect diameter (wheel 2)");                                   
        return; //no permite que se continúe con el código. 
  }else if (diam3.value<0.4||diam3.value>2){
        alert("Incorrect diameter (wheel 3)");                                   
        return; //no permite que se continúe con el código. 
  }else if (diam4.value<0.4||diam4.value>2){
        alert("Incorrect diameter (wheel 4)");                                   
        return; //no permite que se continúe con el código. 
}


ui.addWheels(fourwheels);
//evitar que se resetee el formulario(acción por defecto)
event.preventDefault();

});