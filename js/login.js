function redireccionar() {
   var email = document.getElementById("email").value;
   var contrasenia = document.getElementById('password').value;
   if (email != "" && contrasenia != "") {
      location.href = "index.html"      
   } else {  
      alert("Debe ingreser email o contraseña")
   }
}
