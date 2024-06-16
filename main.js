
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
        return true
    }else{
        alert("NO CUMPLES CON LA EDAD")
        return false
    }
}

capturarNombre()
if(!capturarEdad()){
    window.close();
}
updateTable();

const botoncompra = document.querySelectorAll(`#boton`);
botoncompra.forEach(botoncompra => {
    botoncompra.addEventListener(`click`, botoncompraclicked);
});

function botoncompraclicked(event) {
    const bot = event.target;
    const card = bot.closest(`.card`)

    const cardtext = card.querySelector(`.card-text`).textContent;
    const itemprice = card.querySelector(`.item-price`).textContent;
    console.log(`botoncompraclicked => cardtext`, cardtext, itemprice);
    addItemToRow(cardtext, itemprice);
}

function addItemToRow(cardtext, itemprice) {
    addEntry(cardtext, itemprice);
    updateTable();
}

function updateTable() {
    let total = 0;
    const rowShopping = document.querySelector(`#shopping`);
    let existingProducts = JSON.parse(localStorage.getItem("allProducts"));
    if (existingProducts == null)
        existingProducts = [];
    let shoppingContent = "";
    existingProducts.forEach((product, index) => {
        let valueProduct = product.itemprice.replace("$", "").replace(".", "");
        total = total + parseInt(valueProduct);
        shoppingContent = shoppingContent + `
        <tr>
            <td>${index + 1}</td>
            <td>${product.cardtext}</td>
            <td>${product.itemprice}</td>
        </tr>    `;

    });

    shoppingContent = shoppingContent + `
        <tr>
            <td></td>
            <td><b>TOTAL:</b></td>
            <td><b>$${total}</b></td>
        </tr>    `;
    shopping.innerHTML = shoppingContent;
}

function addEntry(cardtext, itemprice) {
    let existingProducts = JSON.parse(localStorage.getItem("allProducts"));
    if (existingProducts == null) existingProducts = [];
    let entry = {
        "cardtext": cardtext,
        "itemprice": itemprice
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingProducts.push(entry);
    localStorage.setItem("allProducts", JSON.stringify(existingProducts));
};

const finalizarCompraBtn = document.getElementById('finalizarCompra');
const agregarAlCarritoBtn = document.getElementById('agregarAlCarrito');
const compraForm = document.getElementById('pedidoForm');
const formInputs = compraForm.querySelectorAll('input[required]');

function verificarCampos() {
    let allFilled = true;
    formInputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });
    return allFilled;
}

agregarAlCarritoBtn.addEventListener('click', function () {
    formularioContainer.classList.toggle('oculto');
});

const modal = new bootstrap.Modal(document.getElementById('exampleModal'));

const pedidoForm = document.getElementById("pedidoForm");
pedidoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    document.getElementById("modalNombre").textContent = nombre;
    document.getElementById("modalDireccion").textContent = direccion;
    document.getElementById("modalTelefono").textContent = telefono;
    modal.show();
});

let btnfinalizar= document.getElementById(`btnfinalizar`);
var myToastEl = document.getElementById('liveToast')
var myToast = bootstrap.Toast.getOrCreateInstance(myToastEl) 

btnfinalizar.addEventListener('click', function () {
    modal.hide();
    localStorage.removeItem("allProducts");
    updateTable();
    myToast.show();
    pedidoForm.reset();
});

///////////////////////////////////////////////////////////////////////////
/*
let sumaTotal = 0
const Producto = function(nombre, precio, cantidades) {
    this.nombre = nombre
    this.precio = precio
    this.cantidades = cantidades;
}

let producto0 = new Producto("blue label", 1600000, 5)
let producto1 = new Producto("canada dry", 55000, 5)
let producto2 = new Producto("todo rico", 8000, 5)
let producto3 = new Producto("tabla de quesos", 328000, 5)
let producto4 = new Producto("cervezas", 18000, 5)
let producto5 = new Producto("mate", 180000, 5)
let producto6 = new Producto("cubanos", 350000, 5)
let producto7 = new Producto("vapeadores", 73000, 5)

const lista = [producto0, producto1, producto2, producto3, producto4, producto5, producto6, producto7]

function filtrarproductos() {
    let palabraclave = prompt("¿Qué quieres comprar?").toUpperCase()
    let resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraclave))
    if (resultado.length > 0) {
        console.table(resultado)
        sumaTotal = sumaTotal + resultado.reduce((sum, producto) => sum + producto.precio, 0)
        console.log("La suma total de los productos es: " + sumaTotal)
    } else {
        alert("No hay coincidencias con " + palabraclave)
    }
}
let continuar = true;
while(continuar){
    filtrarproductos()
    let preguntaContinua = prompt("Desea continuar comprando?(S/N)").toUpperCase()
    if(preguntaContinua==='N')
    {
        continuar = false
    }
}
*/
