let data = [];
let infoProductos = `https://japceibal.github.io/emercado-api/products/${localStorage.getItem("catID")}.json`;
let listaComentarios=  `https://japceibal.github.io/emercado-api/products_comments/${localStorage.getItem("catID")}.json`;

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(infoProductos).then(function(resultObj){
        if (resultObj.status === "ok"){
            //console.log(resultObj.data)
            showProductsInfoList(resultObj.data);
            showOtherProducts(resultObj.data);
        }
    });
});

getJSONData(listaComentarios).then(function(resultObj){
        if (resultObj.status === "ok"){
             comentarios = resultObj.data
            //console.log(comentarios)
            showCommentsList()
        }
    });


function showProductsInfoList(product){

    let imagenes = "";
    for (const image of product.images) {
      imagenes +=`
      <img id="img" src="${image}"/>
      `
    }

    let producto = `
    <h2>${product.name}</h2>
    <hr>
    <h4>PRECIO</h4>
    <p>${product.currency}${product.cost}</p>
    <br>
    <h4>DESCRIPCION</h4>
    <p>${product.description}</p>
    <br>
    <h4>CATEGORIA</h4>
    <p>${product.category}</p>
    <br>
    <h4>CANTIDAD VENDIDA</h4>
    <p>${product.soldCount}</p>
    <br>
    <div class="bd-placeholder-img card-img-top">
    <h4>IMAGENES ILUSTRATIVAS</h4>
    <p>${imagenes}</p>
    <br>
    </div>
    <hr>
    <br>
     `
       document.getElementById("product-info-container").innerHTML = producto;
    }

    function setProdInfoID(id) {
        localStorage.setItem("catID", id);
        //console.log(id);
        window.location = "product-info.html"
    }
    

function showOtherProducts(product){
    let others = product.relatedProducts;
    //console.log(others[1].image);
    
    let htmlContentToAppend = ""
    for (let i = 0; i < others.length; i++) {
      let otros = others[i];

      htmlContentToAppend +=`
      <div onclick="setProdInfoID(${otros.id})" class="list-group-item-action cursor-active">
      <div class="col-6">
          <img src= "` + otros.image + `" alt="product image" class="img-thumbnail">
          <h4>`+ otros.name +`</h4>
      </div>
      </div>
`
    }
 document.getElementById("producto-relacionado").innerHTML = htmlContentToAppend;
}

    function showCommentsList(){

        let htmlContentToAppend = "";
        for(let i = 0; i < comentarios.length; i++){
            let com = comentarios[i];
    
                htmlContentToAppend += `
                <div onclick="setCatID(${com.id})" class="list-group-item list-group-item-action cursor-active" id="com">
                    <div class="row">
                    <b><p class="mb-1">${com.user}</p></b><p class="mb-1">${com.dateTime}</p>
                        <div class="col">
                            <p class="mb-1">${calificacion(com.score)}</p>
                            <p class="mb-1">${com.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
            document.getElementById("comments").innerHTML = htmlContentToAppend;
    
        }

function calificacion (score){
    let estrella = ``
    for (let i=0; i<5; i++){
        if(i<score){
            estrella += `<i class="fa fa-star checked"></i>`
        } else {
            estrella += `<i class="fa fa-star"></i>`
        }
    } return estrella;
}


