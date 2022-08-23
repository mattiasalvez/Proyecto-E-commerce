
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("formulario")

form.addEventListener("submit", e=>{
    e.preventDefault()
    if (usuario.value.length === 0 || contraseña.value.length === 0){
        alert("Debe completar los campos")
        return false;
    } else  window.location.href = "file:///C:/Users/59895/Desktop/Jap/Entrega1/46679728_Entrega1/workspace-inicial/inicio.html";
}
)





//function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }