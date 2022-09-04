function  showProductsList(array){
    let mostrar = "";
    for(let prod of array.products){ 
        mostrar += `
        <div class="list-group-item list-group-item-action">
             <div class="row">
                 <div class="col-3">
                     <img src="` + prod.image + `" alt="product image" class="img-thumbnail">
                 </div>
                 <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                         <div class="mb-1">
                         <h4>`+ prod.name + " - " + prod.currency + " - " + prod.cost  +`</h4> 
                        <p> `+ prod.description +`</p> 
                         </div>
                         <small class="text-muted">` + prod.soldCount + ` artículos</small> 
                     </div>
                </div>
             </div>
         </div>
         `
        document.getElementById("product-list-container").innerHTML = mostrar; 
    }
}

const datos = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`
let listaVacia = [];

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(datos).then(function(resultObj){
        if (resultObj.status === "ok")
        { 
            listaVacia = resultObj.data;
            showProductsList(listaVacia);
        }
    });
});
