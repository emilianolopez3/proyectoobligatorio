function redireccionar(){
    var email = document.getElementById("email").value;
    var contrasenia = document.getElementById('password').value;
    var pagina  = "index.html"
    if ( email != "" && contrasenia != "") {
        alert("entro aqui")
        location.href = pagina 
    }else{
         alert("Debe ingreser email y contraseña")  
        }   
}

