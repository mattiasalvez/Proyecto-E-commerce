let infoPeugeot = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(infoPeugeot).then(function(resultObj){
        if (resultObj.status === "ok"){
        }
        showCartList(resultObj.data);
        })
    });

    let name1= document.getElementById("nombre");
    let precio= document.getElementById("costo");
    let cantidad= document.getElementById("cantidad2");
    let subtotal = document.getElementById("subtotal");
    let images = document.getElementById("autito");
    let subtot = document.getElementById("subtotales");

    function showCartList(product){
        let carrito = product.articles
        for(let i = 0; i < carrito.length; i++){
            let carro = carrito[i];

            let dato0 = carro.image;
            let dato1 = carro.name;
            let dato2 = carro.unitCost;
            let dato3 = carro.count;
            let dato4 = carro.currency;

            images.innerHTML = `<img src= "` + dato0 + `" alt="product image" class="" id="autito"></img>`
            name1.innerHTML = dato1;
            precio.innerHTML = dato2;
            cantidad.innerHTML = dato3;
            subtotal.innerHTML = dato2*dato3;
            subtot.innerHTML = dato2*dato3;
          
        }}

    function calculo2(num1, num2){
    let result = num1.innerHTML*num2;
    document.getElementById("subtotal").innerHTML = result;
    document.getElementById("subtotales").innerHTML = result;
    }

    // Funcion para calcular el envío
    function calculo1(){
    let envio1 = document.getElementById("premium");
    let envio2 = document.getElementById("express");
    let envio3 = document.getElementById("standard");

    const envioOk = envio1.checked
        ? envio1.value
        : envio2.checked
        ? envio2.value
        : envio3.value;
        let final = parseInt(subtotal.innerHTML*envioOk);
        document.getElementById("envios").innerHTML = final;
        final = parseInt(final);
        sub = parseInt(subtotal.innerHTML);
        document.getElementById("totales").innerHTML = final + sub;
    }

// Bloque de los Disabled
    document.getElementById("tarjeta").addEventListener("input", function(event) {
    document.getElementById("debito").disabled = !this.value;
    document.getElementById("debitocampo").disabled = !this.value;
    },false);

    document.getElementById("debito").addEventListener("input", function(event) {
    document.getElementById("tarjeta").disabled = !this.value;
    document.getElementById("tarjetanumeracion").disabled = !this.value;
    document.getElementById("tarjetacodigo").disabled = !this.value;
    document.getElementById("tarjetavencimiento").disabled = !this.value;
},false);

// Funcion para validaciones
let validar = document.getElementsByClassName("validacion1");
let pagos = document.getElementById("selectbot")
let tarjetaVal = document.getElementById("tarjeta");
let cuentaVal = document.getElementById("debito");

 function validation(){
    for (const element of validar) {
        if (!element.checkValidity()) {
            element.classList.add("is-invalid");
            element.classList.remove("is-valid");
         } else {
                element.classList.add("is-valid");
                element.classList.remove("is-invalid");
        } 
    }
    
    if (cantidad.value>0) {
            cantidad.classList.add("is-valid");
            cantidad.classList.remove("is-invalid");
    } else {
            cantidad.classList.add("is-invalid");
            cantidad.classList.remove("is-valid");
    } 

    if (cuentaVal.checked){
        cuentaVal.classList.add("is-valid");
        cuentaVal.classList.remove("is-invalid");
        pagos.classList.remove("text-danger");
        pagos.classList.add("is-valid");
        pagos.classList.remove("is-invalid");
    } else {
        cuentaVal.classList.add("is-invalid");
        cuentaVal.classList.remove("is-valid");
        pagos.classList.add("is-invalid");
        pagos.classList.remove("is-valid");
        pagos.classList.remove("text-danger");
    }
    
    if (tarjetaVal.checked){
        tarjetaVal.classList.add("is-valid");
        tarjetaVal.classList.remove("is-invalid");
        pagos.classList.remove("text-danger");
        pagos.classList.add("is-valid");
        pagos.classList.remove("is-invalid");
    }}

 function showAlert(){
    let validaciones = document.getElementsByClassName("is-valid");
    if (validaciones.length===14){
        document.getElementById("alertaFinal").hidden=false;
    }
}

document.getElementById("finalizar").addEventListener("click", function(evt){
    evt.preventDefault();
    validation();
    showAlert();
    })


