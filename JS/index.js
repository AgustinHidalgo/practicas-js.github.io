function productos (nombre, precio, categoria, img){
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.img = img
}

let producto1 = new productos("Dulce de leche", 500, "crema", "./img/helado-de-dulce-de-leche-640x480.webp")
let producto2 = new productos("Americana", 480, "crema", "./img/americana.webp")
let producto3 = new productos("Frutilla", 450, "agua", "./img/frutilla.jpg")
let producto4 = new productos("Durazno", 430, "agua", "./img/durazno.jpg")


let listaDeProductos = [producto1, producto2, producto3, producto4]
let catalogo = document.getElementById("catalogo")
function creadorDeCards(listas){
    catalogo.innerHTML = "<h1>Productos</h1>"
    for (prod of listas){
        let card = document.createElement("div")

        card.className = "card"

        card.innerHTML = `<img src=${prod.img}> <h2> Sabor: ${prod.nombre}</h2> <p> Precio: $${prod.precio}</p>`
        catalogo.append(card)
    }
}

creadorDeCards(listaDeProductos)

let eleccionDeSabor = prompt("Elija una categoria A) Crema B)Agua")

let filtroNuevo = listaDeProductos.filter((prod) => prod.categoria == eleccionDeSabor)

creadorDeCards(filtroNuevo)