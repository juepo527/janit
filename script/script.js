let nombre, apellido, usuario, email, direccion, ciudad

let formulario = document.getElementById('form')
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    leerdata()
    LocalStorage()
})
function leerdata() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    email = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('country').value
    LocalStorage()
}
function LocalStorage() {
    localStorage.setItem("Nombre", nombre)
    localStorage.setItem("Apellido", apellido)
    localStorage.setItem("Usuario", usuario)
    localStorage.setItem("email", email)
    localStorage.setItem("direccion", direccion)
    localStorage.setItem("ciudad", ciudad)
}
function ExtraerLocalStorage() {
    let nom = localStorage.getItem("Nombre", nombre)
    localStorage.getItem("Apellido", apellido)
    localStorage.getItem("Usuario", usuario)
    localStorage.getItem("email", email)
    localStorage.getItem("direccion", direccion)
    localStorage.getItem("ciudad", ciudad)
    alert('Bbienvenido',nom)//esto no funciona la proxima clase se resuelve// 
}
