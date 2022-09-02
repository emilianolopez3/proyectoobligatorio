function redireccionar(){
    var email = document.getElementById("email").value;
    var contrasenia = document.getElementById('password').value;
    if ( email != "" && contrasenia != "") {
        alert("entro aqui")
        location.href = "index.html"
    }else{
         alert("Debe ingreser email y contraseña")  
        }   
}

