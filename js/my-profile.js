let mail = obtenerInfo();
document.getElementById("emailpr").value = mail;

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
            }}
        }
    
        function complete(){
            if (nameProfile.value){
                localStorage.setItem("nombre", nameProfile.value);
            } else false;
            if (surnameProfile.value){
                localStorage.setItem("apellido", surnameProfile.value);
            } else false;
            if (mailProfile.value){
                localStorage.setItem("mailing", mailProfile.value);
            } else false;
        }

       save.addEventListener("click", function(e){
        validationProfile();
        complete();
       })

       nameProfile.value = localStorage.getItem("nombre");
       surnameProfile.value = localStorage.getItem("apellido");
   