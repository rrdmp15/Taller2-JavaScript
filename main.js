function repetir(){
    let numero = parseInt(prompt("Escriba un numero:"))

    if(numero % 2 == 0 && numero > 10){
        alert("Es par y mayor a 10");
    } else if (numero % 2 == 0 && numero < 10){
        alert("Es par y menor a 10");
    } else if (numero % 2 == 0 && numero == 10){
        alert("Es par");
    }else if ( numero > 10){
        alert("Es impar y mayor a 10");
    }else if ( numero < 10){
        alert("Es Impar y menor a 10");
    }else if ( numero == 10){
        alert("Es impar");
    }else{
        alert("Ingresa un numero valido");
    }

    repetir()
}

repetir()