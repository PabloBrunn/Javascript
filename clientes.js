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
    const edad = document.getElementById("edad").value;

    const persona = new Persona(nombre, email, edad);


    Formulario.reset()


    personas.push(persona);

});

console.log(personas);