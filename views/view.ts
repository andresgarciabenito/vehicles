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
