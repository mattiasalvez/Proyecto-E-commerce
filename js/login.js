
const usuario = document.getElementById("usuario")
const contraseña = document.getElementById("contraseña")
const form = document.getElementById("formulario")


//localStorage.setItem("usuario", usuario);

form.addEventListener("submit", e=>{
    e.preventDefault()
    if (usuario.value.length === 0 || contraseña.value.length === 0){
        alert("Debe completar los campos")
        return false;
    } else { localStorage.setItem("usuario", usuario.value);
     window.location.href = "inicio.html";
}}
)
