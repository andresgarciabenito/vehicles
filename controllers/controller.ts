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
    return;
    
    });
    
    
    //Capturar el submit del segundo form (wheels)
    
    document.getElementById('wheel-form').addEventListener('submit', function(){
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