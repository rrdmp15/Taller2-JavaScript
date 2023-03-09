let numero1 = parseInt(prompt("Escribe el primer numero:"));
let numero2 = parseInt(prompt("Escribe el segundo numero:"));

if (numero1 > numero2){
    let suma = (numero1 + numero2)
    let resta = (numero1 - numero2)
    alert("La suma es igual a " + suma + " y la diferencia es igual a " + resta)
} else if (numero1 < numero2){
    let producto = (numero1 * numero2)
    let dividendo = (numero1 / numero2)

    alert("El producto es igual a " + producto + " y la division es igual a " + dividendo)
}
