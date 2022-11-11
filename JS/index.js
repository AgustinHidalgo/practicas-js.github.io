//llamar los datos del json}
let catalogo = document.getElementById("catalogo")
let carrito = []
const botonCarrito = document.getElementById("botonCarrito")
const conteinerCarrito = document.getElementById("conteinerModal")
const total = document.getElementById("totalCompra")
const vaciar = document.getElementById("vaciarCarrito")
const comprar = document.getElementById("comprarProductos")
fetch('data.json')
.then((response) => response.json())
.then((resultado)=>{
    
    productos = resultado.productos

    generarProductos(productos)

})
cargarElCarrito()


function generarProductos(productos){
    catalogo.innerHTML = ""
    productos.forEach((producto) =>{
        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <img src=${producto.img}> 
        <hr>
        <div class="cardBody">
            <h2> Sabor: ${producto.nombre}</h2>
            <p> Precio por kilo: $${producto.precio}</p>
            <p> Descripcion: ${producto.descrip}</p>
        </div>
        `
        let cardButton = document.createElement("div")
        cardButton.classList.add("cardButton")
        let shopButton = document.createElement("button")
        shopButton.classList.add("botonesStyle")
        shopButton.innerText = "Comprar"
        shopButton.setAttribute("mark", producto.id)
        shopButton.addEventListener("click", addToCart)
        
        cardButton.append(shopButton)
        card.append(cardButton)
        catalogo.append(card);
        
    })
    total.innerText = "TOTAL: " + "$" + calcularPrecioTotal()
}

function addToCart(e){
    carrito.push(e.target.getAttribute('mark'))
    renderizarCarrito()
}

function renderizarCarrito(){
    guardarEnStorage()
    conteinerCarrito.innerHTML = ""
    let carritoNoRepeat = [... new Set(carrito)]

    carritoNoRepeat.forEach((prod) => {
        let item = productos.filter((producto) => {
            return producto.id === parseInt(prod)
        })
        let cantidad = carrito.reduce((total , id) =>{
            return id === prod ? total+=1 : total
        }, 0)
        
    
    

    let lineProduct = document.createElement("div")
    lineProduct.classList.add("lineProductStyle")
    lineProduct.innerText = `1K de ${item[0].nombre} x ${cantidad} $${item[0].precio}`

    let botonEliminar = document.createElement("button")
    botonEliminar.classList.add("btn", "btn-danger")
    botonEliminar.innerText = "X"
    botonEliminar.setAttribute("item", prod)
    botonEliminar.addEventListener("click", eliminarProducto)

    lineProduct.append(botonEliminar)
    conteinerCarrito.append(lineProduct)
    })
    Toastify ({
        text: 'Se agregó el producto',
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
            background: '#ed639d'
        }
    }).showToast();
    total.innerText = "TOTAL: " + "$" + calcularPrecioTotal()
}
function guardarEnStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}


function eliminarProducto(e){
    let id = e.target.getAttribute("item")
    carrito = carrito.filter((carritoId) => {
        return carritoId != id
    }
    )
    renderizarCarrito()
}

vaciar.addEventListener("click", vaciarCarrito)


function vaciarCarrito(){
    Swal.fire({
        title: 'Estás seguro de vaciar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Si, vacíalo!',
        cancelButtonText: 'Cancelar',
        allowEnterKey: true
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Vaciado!',
            'Tu pedido ha sido eliminado.',
            'success'
            )
            conteinerCarrito.innerHTML = ""
            carrito = []
            total.innerText = "TOTAL: " + "$" + 0
        }
    })

}
comprar.addEventListener("click", () =>{
        Swal.fire(
            'Tu compra se realizo con exito',
            'Pronto recibiras una notificacion con los datos de tu pedido',
            'success'
        )
        carrito = []
        conteinerCarrito.innerHTML = ""
        total.innerText = "TOTAL: " + "$" + 0
        }
)
function cargarElCarrito(){
    if(localStorage.getItem("carrito") !== null){
        JSON.parse(localStorage.getItem("carrito"))
    }
}


function calcularPrecioTotal(){
    return carrito.reduce((total, item)=> {
        let prod = productos.filter((producto) =>{
            return producto.id === parseInt(item)
        })
        return total + prod[0].precio
    }, 0)
}
let eleccionDeCategoria = ""
let valorInput = document.getElementById("categoriaElegida")
valorInput.addEventListener("change", ()=>{eleccionDeCategoria = valorInput.value}) 



let botonDeFiltrado = document.getElementById("filtrar")

botonDeFiltrado.addEventListener("click", filtradoProductos)

let mostrarTodos = document.getElementById("volverATodos")

mostrarTodos.addEventListener("click", ()=>{generarProductos(productos)})

function filtradoProductos(){
    let filtroNuevo = productos.filter((prod) => prod.categoria == eleccionDeCategoria)
    generarProductos(filtroNuevo)
    if(filtroNuevo.length == 0){
        let productoEquivocado = document.createElement("p")
        productoEquivocado.classList.add("productoError")
        productoEquivocado.innerText = "Perdon, no tenemos este producto todavia"
        catalogo.append(productoEquivocado)
    }
}