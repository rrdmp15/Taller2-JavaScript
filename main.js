let nuevoEstudiante;

function datosEstudiantes(){
    function estudiante(nombre,sexo,nota){
        this.nombre=nombre;
        this.sexo=sexo;
        this.nota=nota;
    }

    let nombreEntrada = prompt("Ingrese su nombre: ");
    let sexoEntrada = prompt("Ingrese su genero (M o F): ");
    let notaEntrada = parseInt(prompt("Ingrese su nota final: "));

    nuevoEstudiante = new estudiante(nombreEntrada, sexoEntrada, notaEntrada);

    añadir();
}

let baseDatos = [];

function añadir(){
    baseDatos.push(nuevoEstudiante);
    console.log(baseDatos)
}