class Persona {
    constructor(nombre, email, edad) {
        this.nombre = nombre; 
        this.email = email;
        this.edad = edad;
    } 
}

const personas = [];

const Formulario = document.getElementById("formulario");



Formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edadIngresada = document.getElementById("edad").value;

    const persona = new Persona(nombre, email, edad);


    personas.push(persona);

    localStorage.setItem("Persona", JSON.stringify(personas));

    Formulario.reset();


    function newFunction() {
        return edadIngresada == (edadIngresada || "edad no ingresada");
    }
});


const botonAdmin = document.getElementById("admin");
const datosAdmin = document.getElementById("datosAdmin");

botonAdmin.addEventListener("click", () => {
    const personas = JSON.parse(localStorage.getItem("Persona"));
    let aux = "";
    personas.forEach(persona => {
        aux += `<div class="datosAdmin">
                    <p class="resultado"> Nombre: ${persona.nombre} </p> 
                    <p class="resultado"> Correo Electrónico: ${persona.email} </p>
                    <p class="resultado"> edad: ${persona.edad} </p>
                </div>
                <hr>`
    });
    datosAdmin.innerHTML = aux; 
})