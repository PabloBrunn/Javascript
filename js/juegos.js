class Producto {
    constructor(id, nombre, precio, cantidad, genero) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.genero = genero;
    }
}

const carrito = [];

const juego1 = new Producto(1, "minecraft", 2300, 1, "survival");
const juego2 = new Producto(2, "conan exiles", 680, 1, "survival");
const juego3 = new Producto(3, "crash", 1300, 1, "plataforma");
const juego4 = new Producto(4, "subnautica", 340, 1, "survival");
const juego5 = new Producto(5, "raft", 240, 1, "survival");


const todosLosJuegos = [juego1, juego2, juego3, juego4, juego5];

const contenedorJuegos = document.getElementById("contenedorJuegos");

todosLosJuegos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.innerHTML = `<div class="contenedorJuego">
                                <img src="../img/${producto.id}.jpg" class="imagenJuego">
                                <div class="descripcionProducto">
                                    <h3 class="tituloJuego"> ${producto.nombre} </h3>
                                    <p class="precioJuego"> ${producto.precio} </p>
                                    <p class="generoJuego"> ${producto.genero} </p>
                                    <button id="boton${producto.id}" class="botonCompra"> Comprar copia del juego </button>
                                </div>
                            </div>`;
    contenedorJuegos.appendChild(divProducto);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        sumarAlCarrito(producto.id);
    })
});


const contenedorCarrito = document.getElementById("contenedorCarrito");

function actualizarCarrito() {
    let aux = "";
    carrito.forEach(producto => {
        aux += `<div class="contenedorJuego">
        <img src="../img/${producto.id}.jpg" class="imagenJuego">
        <div class="descripcionProducto">
            <h3 class="tituloJuego"> ${producto.nombre} </h3>
            <p class="precioJuego"> ${producto.precio} </p>
            <p class="generoJuego"> ${producto.genero} </p>
            <p class="cantidadJuego"> ${producto.cantidad} </p>
            <button onClick = "eliminarDelCarrito(${producto.id})"> Eliminar del Carrito </button>
        </div>
    </div>`;
    });
    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}

const sumarAlCarrito = (id) => {
    const producto = todosLosJuegos.find(producto => producto.id === id);
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    productoEnCarrito ? productoEnCarrito.cantidad++ : carrito.push(producto);
    actualizarCarrito();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto), 1);
    actualizarCarrito();
    console.log(`eliminaste el juego ${producto.nombre}`)
}

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
    carrito.length === 0 && 
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Carrito Vaciado',
        showConfirmButton: false,
        timer: 1500
    })
});

const totalACompra = document.getElementById("totalACompra");

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    totalACompra.innerHTML = total;
}


const juego6 = new Producto(6, "project zomboid", 2800, 1, "zombies");
const juego7 = new Producto(7, "mario kart", 300, 1, "carreras");
const juego8 = new Producto(8, "mario", 520, 1, "plataforma");
const juego9 = new Producto(9, "rust", 4500, 1, "survival");
const juego10 = new Producto(10, "dota", 120, 1, "moba");

const juegosAgregar = [juego6, juego7, juego8, juego9, juego10];

const juegosDelMesSiguiente = [...todosLosJuegos, ...juegosAgregar];

console.log(juegosDelMesSiguiente)


const lanzamiento = document.getElementById("lanzamiento");


juegosDelMesSiguiente.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.innerHTML = `<div class="contenedorJuego">
                                <img src="../img/${producto.id}.jpg" class="imagenJuego">
                                <div class="descripcionProducto">
                                    <h3 class="tituloJuego"> ${producto.nombre} </h3>
                                    <p class="precioJuego"> ${producto.precio} </p>
                                    <p class="generoJuego"> ${producto.genero} </p>
                                </div>
                            </div>`;
    lanzamiento.appendChild(divProducto);
    });


const botonComprar = document.getElementById("comprarCarrito");

botonComprar.addEventListener("click", () => {
    Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'compra realizada',
            showConfirmButton: false,
            timer: 1500
        })
})