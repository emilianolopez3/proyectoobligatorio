const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentProductArray = [];


function setCatID(id) {
  localStorage.setItem("catID", id);
  window.location = "products.html"
}

function showProductList(array){
  
  let htmlContentToAppend = "";
  for(let i = 0; i < currentProductArray.length; i++){
      let product = currentProductArray[i];
      
      if (((minCount == undefined) || (minCount != undefined && parseInt(product.productCount) >= minCount)) &&
          ((maxCount == undefined) || (maxCount != undefined && parseInt(product.productCount) <= maxCount))){

          htmlContentToAppend += `
          <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action cursor-active">
              <div class="row">
                  <div class="col-3">
                      <img src="${product.imgSrc}" alt="${product.description}" class="img-thumbnail">
                  </div>
                  <div class="col">
                      <div class="d-flex w-100 justify-content-between">
                          <h4 class="mb-1">${product.name}</h4>
                          <small class="text-muted">${product.productCount} artículos</small>
                      </div>
                      <p class="mb-1">${product.description}</p>
                  </div>
              </div>
          </div>
          `
      }
      document.getElementById("container").innerHTML = htmlContentToAppend;
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productArray = resultObj.data;
            showProductList(productArray.products);
        
        }
    });
});