
const datos = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`
let ListadoDeAutos = [];


function  showCategoriesList(autos){
    let mostrarAutos = "";

    for(let auto of autos.products){ 
        mostrarAutos += `
        <div class="list-group-item list-group-item-action">
             <div class="row">
                 <div class="col-3">
                     <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                 </div>
                 <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                         <div class="mb-1">
                         <h4>`+ auto.name + " - " + auto.currency + " - " + auto.cost  +`</h4> 
                        <p> `+ auto.description +`</p> 
                         </div>
                         <small class="text-muted">` + auto.soldCount + ` artículos</small> 
                     </div>

                </div>
             </div>
         </div>
         `
        document.getElementById("cat-list-container").innerHTML = mostrarAutos; 
    }
}

document.addEventListener("DOMContentLoaded", function(){
    getJSONData(datos).then(function(resultObj){
        if (resultObj.status === "ok")
        { 
            ListadoDeAutos = resultObj.data;
            showCategoriesList(ListadoDeAutos);
        }
    });
});