const email = document.getElementById("email");
const contrasenia = document.getElementById('password');
const button = document.getElementById("regBtn");


function checkinput(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const buttonValue = button.value.trim();

}

if (emailValue === "") {
    setErrorFor (email, "Ingresa tu e-mail")
} else {
    setSuccessFor(email)
}

if (passwordValue === "") {
    setErrorFor (password, "Ingresa tu contraseña")
} else {
    setSuccessFor(password)
}

