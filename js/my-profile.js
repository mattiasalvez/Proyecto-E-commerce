let mail = obtenerInfo();
document.getElementById("emailpr").value = mail;

    //Validaciones
    const validacionesPr = document.getElementsByClassName("valiProfile");
    const nameProfile = document.getElementById("namepr");
    const surnameProfile = document.getElementById("surnamepr");
    const mailProfile = document.getElementById("emailpr");
    const save = document.getElementById("btnSave");

    function validationProfile(){
        let array = [];
        for (const element of validacionesPr) {
            if (!element.checkValidity()) {
                element.classList.add("is-invalid");
                element.classList.remove("is-valid");
             } else {
                    element.classList.add("is-valid");
                    element.classList.remove("is-invalid");
                    localStorage.setItem("nombre", nameProfile.value);
                    sessionStorage.setItem("nombre", nameProfile.value);
                    localStorage.setItem("apellido", surnameProfile.value);
                    localStorage.setItem("mailing", mailProfile.value);
            }}
        }
       save.addEventListener("click", function(e){
        validationProfile();
       }) 
   