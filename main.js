let nuevoEstudiante;
let baseDatos = [];
let notas = [];
let nombres = [];
let m = 0;
let f = 0;

do{
   
        function estudiante(nombre,sexo,nota){
            this.nombre=nombre;
            this.sexo=sexo;
            this.nota=nota;
        }

        let nombreEntrada = prompt("Ingrese su nombre: ");
        let sexoEntrada = prompt("Ingrese su genero (M o F): ");
        let notaEntrada = parseInt(prompt("Ingrese su nota final(0.0 a 5.0): "));

        nuevoEstudiante = new estudiante(nombreEntrada, sexoEntrada, notaEntrada);

        añadir();
    
        if(sexoEntrada == "M"){
           (m = m + 1)
        } else if (sexoEntrada == "F"){
            (f = f + 1)
        }

} while(confirm("desea continuar?"));


concadenarNotas();
concadenarNombres();

function añadir(){
    baseDatos.push(nuevoEstudiante);
    console.log(baseDatos);
}

function concadenarNotas(){
    for (let i of baseDatos){
        notas.unshift(i.nota);
    }
}

function concadenarNombres(){
    for (let i of baseDatos){
        nombres.unshift(i.nombre);
    }
}

let positionMax = notas.indexOf(Math.max(...notas));
let positionMin = notas.indexOf(Math.min(...notas));

alert( `La mayor nota es de ${nombres[positionMax]} y es ${Math.max(...notas)} y la menor nota es ${nombres[positionMin]} y es ${Math.min(...notas)}.`);

alert(`Entre los estudiantes hay ${m} hombres y ${f} mujeres.`);