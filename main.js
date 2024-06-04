
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
/////////////////////////////////////////////////////////////////////////////////

/* localStorage.removeItem("allProducts") al teminar la compra se aplica  */ 

////////////////////////////////////////////////////////////////////////////////

updateTable();

const botoncompra= document.querySelectorAll(`#boton`);
botoncompra.forEach(botoncompra=>{
    botoncompra.addEventListener(`click`, botoncompraclicked);
});

function botoncompraclicked(event){
    const bot= event.target;
    const card= bot.closest(`.card`)

    const cardtext= card.querySelector(`.card-text`).textContent;
    const itemprice= card.querySelector(`.item-price`).textContent;
    const cardImgTop= card.querySelector(`.card-img-top`).src;
    console.log(`botoncompraclicked => cardtext`, cardtext, itemprice, cardImgTop);
    addItemToRow(cardtext, itemprice, cardImgTop);
}

function addItemToRow(cardtext, itemprice, cardImgTop){
    addEntry(cardtext, itemprice);
    updateTable();
}

function updateTable(){
    let total= 0; 
    const rowShopping= document.querySelector(`#shopping`);
    let existingProducts = JSON.parse(localStorage.getItem("allProducts"));
    if(existingProducts == null) 
        existingProducts = [];
    let shoppingContent = "";
    existingProducts.forEach((product, index) => {
        let valueProduct = product.itemprice.replace("$","").replace(".","");
        total = total + parseInt(valueProduct);
        shoppingContent= shoppingContent +`
        <tr>
            <td>${index+1}</td>
            <td>${product.cardtext}</td>
            <td>${product.itemprice}</td>
        </tr>    `;
        
    });

    shoppingContent= shoppingContent +`
        <tr>
            <td></td>
            <td>TOTAL</td>
            <td>$${total}</td>
        </tr>    `;
    shopping.innerHTML= shoppingContent;
}

function addEntry(cardtext, itemprice) {
    var existingProducts = JSON.parse(localStorage.getItem("allProducts"));
    if(existingProducts == null) existingProducts = [];
    var entry = {
        "cardtext": cardtext,
        "itemprice": itemprice
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingProducts.push(entry);
    localStorage.setItem("allProducts", JSON.stringify(existingProducts));
};
//////////////////////////////////////////////////////////////////////////
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