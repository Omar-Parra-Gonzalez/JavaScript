
let nombre = ""
function capturarNombre() {
    let nombreInvalido = true
    while (nombreInvalido === true) {
        nombre = prompt("ingresa tu nombre")
        if (nombre) {
            alert("Hola " + nombre)
            nombreInvalido = false
        }
    }
}
function capturarEdad(){
    alert(nombre + " para ingresar a este sitio debes ser mayor de edad")
    let edadusuario= parseInt(prompt("Ingresa tu edad"))
    if(edadusuario>=18 && edadusuario<=40){
        alert("Bienvenido/a " + nombre)
    }else{
        alert("NO CUMPLES CON LA EDAD")
    }
}


capturarNombre()
capturarEdad()