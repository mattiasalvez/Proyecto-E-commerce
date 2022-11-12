const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";


let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function obtenerInfo(){
  let mail = localStorage.getItem("usuario");
  return mail;
}

document.getElementById("usuarioIngresado").innerHTML = `<div class="dropdown">
<a class="btn btn-secondary dropdown-toggle" href="index.html" role="button" id="usuarioIngresado" data-bs-toggle="dropdown" aria-expanded="false">${obtenerInfo()}</a>
<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
  <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
  <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
  <li id="cerrar"><a class="dropdown-item" href="index.html">Cerrar Sesión</a></li>
</ul>
</div>
`;

  document.getElementById("cerrar").addEventListener("click", function() {
      localStorage.clear();
  });



