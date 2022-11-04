function productos (nombre, precio, categoria, img, id){
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.img = img
    this.id= id
}

let producto1 = new productos("Dulce de leche", 500, "crema", "./img/helado-de-dulce-de-leche-640x480.webp",1)
let producto2 = new productos("Americana", 480, "crema", "./img/americana.webp",2)
let producto3 = new productos("Frutilla", 450, "agua", "./img/frutilla.jpg",3)
let producto4 = new productos("Durazno", 430, "agua", "./img/durazno.jpg",4)

let listaDeProductos = [producto1, producto2, producto3, producto4]
let catalogo = document.getElementById("catalogo")
function creadorDeCards(listas){
    catalogo.innerHTML = ``
    
    for (prod of listas){
        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<img src=${prod.img}> <h2> Sabor: ${prod.nombre}</h2> <p> Precio: $${prod.precio}</p> <button class="botonesStyle" mark="${prod.id}"> Comprar </button>`
        catalogo.append(card)
    }
} 
creadorDeCards(listaDeProductos)

let eleccionDeCategoria = ""

let valorInput = document.getElementById("categoriaElegida")
valorInput.addEventListener("change", ()=>{eleccionDeCategoria = valorInput.value})



let botonDeFiltrado = document.getElementById("filtrar")

botonDeFiltrado.addEventListener("click", filtradoProductos)

let mostrarTodos = document.getElementById("volverATodos")

mostrarTodos.addEventListener("click", ()=>{creadorDeCards(listaDeProductos)})

function filtradoProductos(){
    let filtroNuevo = listaDeProductos.filter((prod) => prod.categoria == eleccionDeCategoria)
    creadorDeCards(filtroNuevo)
    if(filtroNuevo.length == 0){
        catalogo.innerHTML = "No tenemos ese producto todavia"
    }
    sessionStorage.setItem("usuarioCategoria", valorInput.value)

let categoriaElegidaUsuario= sessionStorage.getItem("usuarioCategoria")

console.log(categoriaElegidaUsuario)
}

localStorage.setItem("helados", JSON.stringify(listaDeProductos))

let a = JSON.parse(localStorage.getItem("helados"))

console.log(a)


/* let eleccionDeSabor = prompt("Elija una categoria A) Crema B)Agua") */