let mail = obtenerInfo();
document.getElementById("emailpr").value = mail;

    const validacionesPr = document.getElementsByClassName("valiProfile");
    const nameProfile = document.getElementById("namepr");
    const surnameProfile = document.getElementById("surnamepr");
    const mailProfile = document.getElementById("emailpr");
    const save = document.getElementById("btnSave");
    const name2Profile = document.getElementById("name2pr");
    const surname2Profile = document.getElementById("surname2pr");
    const phoneProfile = document.getElementById("phone");

    //Validaciones
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
            if (name2pr.value){
                localStorage.setItem("nombre2", name2Profile.value);
            } else false;
            if (surname2Profile.value){
                localStorage.setItem("apellido2", surname2Profile.value);
            } else false;
            if (phoneProfile.value){
                localStorage.setItem("telefono", phoneProfile.value);
            } else false;    
            alerts();       
        }

       save.addEventListener("click", function(e){
        validationProfile();
        complete();
       })

       //Mantengo la información en pantalla
       nameProfile.value = localStorage.getItem("nombre");
       surnameProfile.value = localStorage.getItem("apellido");
       name2Profile.value = localStorage.getItem("nombre2");
       surname2Profile.value = localStorage.getItem("apellido2");
       phoneProfile.value = localStorage.getItem("telefono");

       function alerts(){
        if (nameProfile.value && surnameProfile.value && mailProfile.value){
            alert("Datos guardados con éxito");
        } else false;
       }
