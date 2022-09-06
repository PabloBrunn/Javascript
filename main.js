const convertirDolar = (numero1, numero2) => numero1 * numero2;


function dolares (numero1, numero2){
    alert("Usted tiene " + (convertirDolar(numero1, numero2)) + " Pesos")
    
}



    let respuesta;
    do{
        let numero1, numero2;
        do{ 
            numero1 = parseFloat(prompt("ingrese cantidad de dolares: "))
            numero2 = parseFloat(prompt("ingrese valor del dolar actual: "))
            if (isNaN (numero1) || isNaN(numero2)){
                console.log("numero no valido")
            }
        }while((isNaN(numero1) || isNaN(numero2)))
        dolares (numero1, numero2);
        do{
            respuesta = prompt("Quiere transformar mas pesos en dolares ?").toLowerCase()
        }while (respuesta != "si" && respuesta != "no")
    }while (respuesta != "no")
