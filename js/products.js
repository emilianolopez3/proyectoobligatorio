var carArray = [];

function showCarList(array) {
    for (let car of array) {
        document.getElementById("container").innerHTML += `
    
    <div class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-3">
            <img src="` + car.image + `" alt="product image" class="img-thumbnail">
        </div>
        <div class="col">
            <div class="d-flex w-100 justify-content-between">
                <div class="mb-1">
                <h4>`+ car.name + " " + car.currency + " " + car.cost + `</h4> 
                <p> `+ car.description + `</p> 
                </div>
                <small class="text-muted">` + car.soldCount + ` artículos</small>
            </div>

        </div>
    </div>
</div>
`
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(INFO_CAR).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carArray = resultObj.data;
            showCarList(carArray.products);
            console.log(carArray.products)
        }
    });
});
