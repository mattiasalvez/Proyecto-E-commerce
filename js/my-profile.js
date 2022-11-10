const txtmail = document.getElementById("emailpr");
console.log(txtmail);

function inicio(){
    let mail = localStorage.getItem("usuario");
    console.log(mail);
    document.getElementById("emailpr").innerHTML = mail;
    console.log(mail);
    
}
inicio();


document.addEventListener("DOMContentLoaded", function(e){
    inicio();
    let mail = localStorage.getItem("usuario");
    console.log(mail);
    document.getElementById("emailpr").innerHTML.value = mail;
    console.log(mail);
  
    });

    inicio();

    //Validaciones
    const validacionesPr = document.getElementsByClassName("valiProfile");
    const nameProfile = document.getElementById("namepr");
    const surnameProfile = document.getElementById("surnamepr");
    const mailProfile = document.getElementById("emailpr");
    const save = document.getElementById("btnSave");

    function validationProfile(){
        for (const element of validacionesPr) {
            if (!element.checkValidity()) {
                element.classList.add("is-invalid");
                element.classList.remove("is-valid");
             } else {
                    element.classList.add("is-valid");
                    element.classList.remove("is-invalid");
            } 
        }}

    
       save.addEventListener("click", function(e){
        validationProfile();
       }) 
   