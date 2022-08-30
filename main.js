let nombre = prompt("Ingrese un nombre:");

let humor = prompt("Hola " + nombre +" como estas ?");

switch(humor){
    case "bien":
        console.log("Me alegro por vos ");
        break;
    case "enojado":
        console.log("pedite una pizza y unas empanadas, chill");
        break;
    case "triste":
        console.log("pedite un helado y una buena peli");
        break;
    case "cansado": 
        console.log("un baño y a la cama");
        break;
    case "genial":
        console.log("bien ahiiiii")
        break;
    case "mal":
        console.log("que paso,contame :(")
        break
    default:
        console.log("no te entendi :(");
        break;
}

let salir = prompt("quiere acceder al sitio ?")

while(salir != "si"){
    console.log(salir);
    salir = prompt("quiere acceder al sitio ?");
}