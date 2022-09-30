document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });  
});

    document.addEventListener("DOMContentLoaded", () => {
        var usuario = localStorage.getItem("email", email)
        document.getElementById("email").innerHTML = usuario;
    });
    
    function setCatID(id) {
        localStorage.setItem("catID", id);
        window.location = "products.html"
      }
