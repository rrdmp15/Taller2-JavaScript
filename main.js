let nuevoAtleta;
let baseDatos = [];
let saltos = [];
let nombres = [];
let ganador = Math.max(...saltos)


do{
    function atleta(nombre, salto){
        this.nombre=nombre;
        this.salto=salto;
    }

    let nombreEntrada = prompt("Ingrese su nombre: ");
    let saltoEntrada = parseFloat(prompt("Ingrese su marca de salto en metros: "));

    nuevoAtleta = new atleta(nombreEntrada, saltoEntrada);

    añadir();

} while(confirm("¿desea continuar?"));


concadenarSalto();
concadenarNombres();

function añadir(){
    baseDatos.push(nuevoAtleta);
    console.log(baseDatos);
}

function concadenarSalto(){
    for (let i of baseDatos){
        saltos.unshift(i.salto);
    }
}

function concadenarNombres(){
    for (let i of baseDatos){
        nombres.unshift(i.nombre);
    }
}
let positionMax = saltos.indexOf(Math.max(...saltos));

console.log(nombres)

if (ganador > 15.50){
    alert(`La campeona es ${nombres[positionMax]}, ha ganado una medalla de oro y rompio el record de 15.50 metros con ${saltos[positionMax]} metros. Por lo que recibe 500 millones como premio.`);
} else{
    alert(`La campeona es ${nombres[positionMax]} y ha ganado una medalla de oro.`);
}
