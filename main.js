function sumarCarrito(valorA, valorB) {
    let resultadoFinal = valorA + valorB;
    return resultadoFinal;
}

class producto {
    constructor(nombre, genero, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.precio = precio;
    }
}

const theForest = new producto("the forest", "survival", 280);
const conanExiles = new producto("conan exiles", "lucha", 490);
const lol = new producto("league of legends", "moba", 10);
const mortalKombat = new producto("mortal kombat", "lucha", 700);
const minecraft = new producto("minecraft", "survival", 890)

const stockJuegos = [theForest, conanExiles, lol, mortalKombat, minecraft];


const contenedorJuegos = document.getElementById("contenedorJuegos");



stockJuegos.forEach( producto => {
    let div = document.createElement("div");
    div.innerHTML = `<p> Juego : ${producto.nombre}</p>
                    <p> Genero : ${producto.genero}</p>
                    <p> Precio : $${producto.precio}</p>
                    <button>Agregar</button>`;
    contenedorJuegos.appendChild(div);
})




const carrito = [];


let eleccionCliente = prompt("desea comprar algun juego?  si/no : ")


while (eleccionCliente != "si" && eleccionCliente != "no") {
    alert("Selecciona si o no")
    eleccionCliente = prompt("desea comprar alguno juego?  si/no : ")
}

if (eleccionCliente == "si") {
    alert("Juegos en stock : ")
    let todosLosJuegos = stockJuegos.map(
        (producto) => producto.nombre + " $" + producto.precio
    );
    alert(todosLosJuegos.join(" --- "))
}

while (eleccionCliente != "no") {
    let nombre = prompt("elija el juego a comprar : ");
    let precio = 0;
    let genero = "sin genero";
    if (nombre == "the forest" || nombre == "conan exiles" || nombre == "lol" || nombre == "mortal kombat" ||
        nombre == "minecraft") {
        switch (nombre) {
            case "the forest":
                nombre = theForest.nombre
                genero = theForest.genero
                precio = theForest.precio;
                break;
            case "conan exiles":
                nombre = conanExiles.nombre;
                genero = conanExiles.genero;
                precio = conanExiles.precio;
                break;
            case "lol":
                nombre = lol.nombre;
                genero = lol.genero;
                precio = lol.precio;
                break;
            case "mortal kombat":
                nombre = mortalKombat.nombre;
                genero = mortalKombat.genero;
                precio = mortalKombat.precio;
                break;
            case "minecraft":
                nombre = minecraft.nombre;
                genero = minecraft.genero;
                precio = minecraft.precio;
                break
            default:
                break;
        }

        carrito.push({ nombre, genero, precio })
    } else {
        alert("no tenemos ese juego")
    }
    eleccionCliente = prompt("quiere comprar otro juego ? si/no");

    while (eleccionCliente == "no") {
        alert("compra realizada")
        carrito.forEach((carritoFinal) => {
            alert(`Producto:${carritoFinal.nombre} Genero:${carritoFinal.genero} Precio:${carritoFinal.precio} `)
        });
        console.log(carrito)
        break;
    }

}

let prueba = carrito.map(
    (producto) => sumarCarrito(carrito[1].precio, carrito[0].precio));
alert( `El total a pagar es : ${prueba[0]}`)