function redirect() {
   var email = document.getElementById("email").value;
   var contrasenia = document.getElementById('password').value;
   if (email != "" && contrasenia != "") {
      localStorage.setItem("email", email); 
      location.href = "index.html";       
   } else {  
      alert("Debe ingreser email o contraseña")
   }
}

