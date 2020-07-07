//Definimos una clase para interfaz (interactúa con el HTML)
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.addCar = function (car) {
        //accedo al div 
        var carList = document.getElementById('car-details');
        var element = document.createElement('div');
        element.innerHTML = "\n    <div class=\"card text-center mb-4\">\n    <h6 class=\"text-success mt-2\">New Car created<h6>\n        <div class=\"card-body\">\n            <div class=\"row justify-content-around\">\n              <div class=\"col-4\">\n                    <strong>Plate:</strong> " + car.plate + "\n              </div>\n              <div class=\"col-4\">\n                    <strong>Brand:</strong> " + car.brand + "\n              </div>\n              <div class=\"col-4\">\n                    <strong>Color:</strong> " + car.color + "\n              </div>\n            </div>\n        </div>\n    </div>\n    ";
        carList.appendChild(element);
    };
    UI.prototype.restoreForm = function () {
        var cardBody = document.getElementById('car-form');
        $("#car-form").empty();
        var newForm = document.createElement('form');
        newForm.innerHTML = "\n        <h5>Step 2. Add wheels</h5>\n    <div class=\"form-group\">\n        <label>Wheel 1</label>\n        <div class=\"row justify-content-around\">\n        <input type=\"text\" id=\"brand1\" placeholder=\"brand\" class=\"form-control col-5\">\n        <input type=\"number\" step=\"0.1\" id=\"diam1\" placeholder=\"diameter\" class=\"form-control col-5\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Wheel 2</label>\n        <div class=\"row  justify-content-around\">\n        <input type=\"text\" id=\"brand2\" placeholder=\"brand\" class=\"form-control col-5\">\n        <input type=\"number\" step=\"0.1\" id=\"diam2\" placeholder=\"diameter\" class=\"form-control col-5\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Wheel 3</label>\n        <div class=\"row  justify-content-around\">\n        <input type=\"text\" id=\"brand3\" placeholder=\"brand\" class=\"form-control col-5\">\n        <input type=\"number\" step=\"0.1\" id=\"diam3\" placeholder=\"diameter\" class=\"form-control col-5\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label>Wheel 4</label>\n        <div class=\"row  justify-content-around\">\n        <input type=\"text\" id=\"brand4\" placeholder=\"brand\" class=\"form-control col-5\">\n        <input type=\"number\" step=\"0.1\" id=\"diam4\" placeholder=\"diameter\" class=\"form-control col-5\">\n        </div>\n    </div>\n    <input type=\"submit\" value=\"ADD WHEELS\" class=\"btn btn-warning btn-block\">\n        ";
        cardBody.appendChild(newForm);
    };
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
    UI.prototype.addWheels = function (fourwheels) {
        //accedo al div 
        var carList2 = document.getElementById('car-details');
        var element2 = document.createElement('div');
        element2.innerHTML = "\n        <div class=\"card text-center mb-4\">\n        <h6 class=\"text-success mt-2\">Wheel details<h6>\n        <div class=\"card-body\">\n            <div class=\"row\">\n            <div class=\"col\">\n              <h6>Wheel 1</h6>\n              <strong>Brand 1:</strong> " + fourwheels.brand1 + " <br>\n              <strong>Diam. 1:</strong> " + fourwheels.diam1 + " <br>\n            </div>\n            <div class=\"col\">\n              <h6>Wheel 2</h6>\n              <strong>Brand 2:</strong> " + fourwheels.brand2 + " <br>\n              <strong>Diam. 2:</strong> " + fourwheels.diam2 + " <br>\n              \n            </div>\n            <div class=\"col\">\n            <h6>Wheel 3</h6>\n              <strong>Brand 3:</strong> " + fourwheels.brand3 + " <br>\n              <strong>Diam. 3:</strong> " + fourwheels.diam3 + " <br>\n              \n            </div>\n            <div class=\"col\">\n              <h6>Wheel 4</h6>\n              <strong>Brand 4:</strong> " + fourwheels.brand4 + " <br>\n              <strong>Diam. 4:</strong> " + fourwheels.diam4 + " <br>\n            </div>  \n        </div>\n        </div>\n        </div>\n        ";
        carList2.appendChild(element2);
    };
    return UI;
}());
