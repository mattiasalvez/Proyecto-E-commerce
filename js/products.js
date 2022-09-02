
const datos = `https://japceibal.github.io/emercado-api/cats_products/${localStorage.getItem("catID")}.json`
let ListadoDeAutos = [];




function  showProductsList(autos){
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
            showProductsList(ListadoDeAutos);
        }
    });
});


const ORDER_ASC_BY_COST = "AZ";
const ORDER_DESC_BY_COST = "ZA";
const ORDER_BY_PROD_SOLDCOUNT = "Cant.";
let currentProductsArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;


function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST)
    {
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_SOLDCOUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
            console.log("hola");
        });
    }

    return result;
}

function setCatID(id) {
    localStorage.setItem("catID", id);
    window.location = "products.html"
}


// function showProductsList(){

//     let htmlContentToAppend = "";
//     for(let i = 0; i < currentProductsArray.length; i++){
//         let product = currentProductsArray[i];

//         if (((minCount == undefined) || (minCount != undefined && parseInt(product.productCount) >= minCount)) &&
//             ((maxCount == undefined) || (maxCount != undefined && parseInt(product.productCount) <= maxCount))){

//             htmlContentToAppend += `
//             <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
//                 <div class="row">
//                     <div class="col-3">
//                         <img src="${product.imgSrc}" alt="${product.description}" class="img-thumbnail">
//                     </div>
//                     <div class="col">
//                         <div class="d-flex w-100 justify-content-between">
//                             <h4 class="mb-1">${product.name}</h4>
//                             <small class="text-muted">${product.productCount} artículos</small>
//                         </div>
//                         <p class="mb-1">${product.description}</p>
//                     </div>
//                 </div>
//             </div>
//             `
//         }

//         document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
//     }
// }


// function sortAndShowProducts(sortCriteria, productsArray){
//     currentSortCriteria = sortCriteria;

//     if(productsArray != undefined){
//         currentProductsArray = productsArray;
//     }

//     currentProductsArray = sortCategories(currentSortCriteria, currentProductsArray);

//     Muestro las categorías ordenadas
//     showProductsList();
// }

// document.addEventListener("DOMContentLoaded", function(e){
//     getJSONData(CATEGORIES_URL).then(function(resultObj){
//         if (resultObj.status === "ok"){
//             currentProductsArray = resultObj.data
//             showCategoriesList()
//             sortAndShowCategories(ORDER_ASC_BY_NAME, resultObj.data);
//         }
//     });

//     document.getElementById("sortAsc").addEventListener("click", function(){
//         sortAndShowCategories(ORDER_ASC_BY_NAME);
//     });

//     document.getElementById("sortDesc").addEventListener("click", function(){
//         sortAndShowCategories(ORDER_DESC_BY_NAME);
//     });

//     document.getElementById("sortByCount").addEventListener("click", function(){
//         sortAndShowCategories(ORDER_BY_PROD_COUNT);
//     });

//     document.getElementById("clearRangeFilter").addEventListener("click", function(){
//         document.getElementById("rangeFilterCountMin").value = "";
//         document.getElementById("rangeFilterCountMax").value = "";

//         minCount = undefined;
//         maxCount = undefined;

//         showCategoriesList();
//     });

//     document.getElementById("rangeFilterCount").addEventListener("click", function(){
//         Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
//         de productos por categoría.
//         minCount = document.getElementById("rangeFilterCountMin").value;
//         maxCount = document.getElementById("rangeFilterCountMax").value;

//         if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
//             minCount = parseInt(minCount);
//         }
//         else{
//             minCount = undefined;
//         }

//         if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
//             maxCount = parseInt(maxCount);
//         }
//         else{
//             maxCount = undefined;
//         }

//         showCategoriesList();
//     });
// });