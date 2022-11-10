//llamar los datos del json}
let catalogo = document.getElementById("catalogo")
let carrito = []
const carritoButton = document.getElementById("botonCarrito")
const modal = document.getElementById("conteinerModal")

fetch('data.json')
.then((response) => response.json())
.then((resultado)=>{
    
    productos = resultado.productos

    generarProductos(productos)

})


function generarProductos(productos){
    catalogo.innerHTML = ""
    productos.forEach((producto) =>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img src=${producto.img}> 
        <hr>
        <div class="cardBody">
            <h2> Sabor: ${producto.nombre}<//h2>
            <p> Precio por kilo: $${producto.precio}</p>
            <p> Descripcion: ${producto.descrip}</p>
        </div>
        <div class="cardButton">
            <button class="botonesStyle" id="agregar ${producto.id}">Comprar</button>
        </div>
        `

    catalogo.append(card);
    let button = document.getElementById(`agregar ${producto.id}`);
    button.addEventListener("click", () => {
        addAlCarrito(producto.id)
    })
    
    }
    )
}

let addAlCarrito = (prodId) => {

    
    let existe = carrito.some (prod => prod.id === prodId)

    if (existe){ 
        let prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito()
    console.log(carrito ) 
}

function actualizarCarrito(){

    carrito.forEach((producto) => {
        let componentes = document.createElement("div")
        componentes.classList.add("divCarrito")
        componentes.innerHTML= `
        <p> Nombre: ${producto.nombre}</p>
        <p> Precio: ${producto.precio}</p
        <p id="negrita"> Cantidad: ${producto.cantidad}<p/>
        <button id="botonBorrado" class="btn btn-danger"> X</button>
        `
    }
    )
}

carritoButton.addEventListener("click", () =>{
    console.log("funciona?")
    let carritoHeader = document.createElement("div")
    carritoHeader.classList.add("divHeader")
    carritoHeader.innerHTML= `
    <p class="carritoStyle"> Tu carrito</p>
    <button class="btn btn-danger"> X </button>
    `
    //crear el body del modal 
    let carritoFooter = document.createElement("div")
    carritoFooter.classList.add("divFooter")
    carritoFooter.innerText = "El total de tu compras es:" + total() 
    
    
    modal.append(carritoHeader)
    
    modal.append(carritoFooter)
    
})

function total(){
    carrito.reduce((acc, elemento) => acc + elemento.precio, 0 )
}

/* for(prod of productos){
let card = document.createElement("div")

card.className = "card"

card.innerHTML = `<img src=${prod.img}> <hr> <div class="cardBody"><h2>Sabor: ${prod.nombre}</h2> <p> Precio por kilo: $${prod.precio}</p><p>Descripcion: ${prod.descrip}</div> <div class="cardButton"><button class="botonesStyle" id="botones" mark="${prod.id}"> Comprar </button> </div>`


botonesStyle.addEventListener("click", anadirAlCarrito)

catalogo.append(card) */