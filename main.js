let nombre1 = prompt("¿cual es tu nombre?");

let edad1 = parseInt(prompt("¿cual es tu edad?"));

let nombre2 = prompt("¿cual es tu nombre?");

let edad2 = parseInt(prompt("¿cual es tu edad?"));

let nombre3 = prompt("¿cual es tu nombre?");

let edad3 = parseInt(prompt("¿cual es tu edad?"));

let edades = [edad1, edad2, edad3]

Math.max(...edades)

if(edad1 > edad2 && edad1 > edad3){
    alert("La persona de mayor edad es " + nombre1);
} else if (edad2 > edad1 && edad2 > edad3){
    alert("La persona de mayor edad es " + nombre2);
} else if (edad3 > edad1 && edad3 > edad2){
    alert("La persona de mayor edad es " + nombre3);
}