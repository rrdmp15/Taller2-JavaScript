let datoNum = [];
let numero;

do{
numero = parseInt(prompt("Digita un numero: "));

añadir();

}while(numero != 0)

function añadir(){
    datoNum.unshift(numero);
}

let total=0;

for(let i of datoNum) total+=i;

let valores = datoNum.length;

let promedio = (total / valores);

let max = Math.max(...datoNum);

let min = Math.min(...datoNum);

alert(`La sumatoria de los valores ingresados es ${total}, el promedio es ${promedio}, la cantidad de valores ingresados es ${valores}, el numero mayor es ${max} y el menor ${min}.`);