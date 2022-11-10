/* function productos (nombre, precio, categoria, img, id,descrip){
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.img = img
    this.id= id
    this.descrip = descrip
}

let producto1 = new productos("Dulce de leche", 500, "crema", "./img/dulcedeleche.jpg", 1, "Crema helada de Dulce de Leche")
let producto2 = new productos("Americana", 480, "crema", "img/crema-americana.jpg", 2,"Helado de Crema Americana con una nueva formula.")
let producto3 = new productos("Frutilla", 430, "agua", "img/frutilla-agua.jpg", 3,"Helado de agua de frutilla con trocitos de frutillas.")
let producto4 = new productos("Durazno", 460, "agua", "img/Durazno-a-la-crema.jpg", 4,"Helado de agua de Durazno.")
let producto5 = new productos("Maracuya",430, "agua", "img/maracuya.jpg", 5, "Helado de agua sabor maracuyá, con agregado de pulpa de maracuyá.")
let producto6 = new productos("Chocolate", 500, "crema", "./img/chocolate.jpg", 6, 'Crema helada de chocolate semi amargo.')




 let eleccionDeSabor = prompt("Elija una categoria A) Crema B)Agua") 



 console.log(listaDeProductos) */


 creadorDeCards(listaDeProductos) 

 function creadorDeCards(listas){ 
    catalogo.innerHTML = ``
    
    for (prod of listas){
    let card = document.createElement("div")

    card.className = "card"

    card.innerHTML = `<img src=${prod.img}> <hr> <div class="cardBody"><h2>Sabor: ${prod.nombre}</h2> <p> Precio por kilo: $${prod.precio}</p><p>Descripcion: ${prod.descrip}</div> <div class="cardButton"><button class="botonesStyle" mark="${prod.id}"> Comprar </button> </div>`
    catalogo.append(card)
    }
}





//empieza el codigo js sin informacion



/* creadorDeCards(listaDeProductos) */
/* */
/*  let eleccionDeCategoria = ""

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

console.log(a) */

/* let catalogo = document.getElementById("catalogo") */