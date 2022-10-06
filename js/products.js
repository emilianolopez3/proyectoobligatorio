let produArray = [];

function showProduList(array) {
for (let produ of array) {
    document.getElementById("container").innerHTML += `
    
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
            <img src="` + produ.image + `" alt="product image" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <div class="mb-1">
                <h4>`+ produ.name +" " + produ.currency + " " + produ.cost +`</h4> 
                <p> `+ produ.description +`</p> 
                </div>
                <small class="text-muted">` + produ.soldCount + ` artículos</small>
            </div>

        </div>
    </div>
</div>
`
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(TIENDA_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
        produArray = resultObj.data;
        showProduList(produArray.products);
      }
    });
  });
