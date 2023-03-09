let nota1 = parseInt(prompt("Ingrese la nota 1"));
let nota2 = parseInt(prompt("Ingrese la nota 2"));
let nota3 = parseInt(prompt("Ingrese la nota 3"));

let promedio = ((nota1 + nota2 + nota3)/3);

if (promedio <= 3.9){
    Swal.fire({
        icon: 'error',
        title: 'Estudie',
    });
} 
else if (promedio > 3.9){
    Swal.fire({
        icon: 'success',
        title: 'Becado',
    });
}
