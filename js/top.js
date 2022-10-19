

const clientes = "https://jsonplaceholder.typicode.com/users";

const contenedorTop = document.getElementById("contenedorTop");

fetch(clientes)
    .then(respuesta => respuesta.json())
    .then((datos) =>{
        console.log(datos)
        topClientes(datos)
    })
    .catch(error => console.log(error));


function topClientes(datos) {
    datos.forEach((cliente) => {
        const divTop = document.createElement("div")
        divTop.innerHTML = `
        <div class="topCompradores">
        <p class="clienteTop">${cliente.id}) ${cliente.name} </p>
        </div>`
        contenedorTop.appendChild(divTop);
    });
}





