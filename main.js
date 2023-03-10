let nombreArticulo = prompt("Ingrese el nombre de su articulo:");
let precioArticulo = parseInt(prompt("Ingrese el precio de su articulo:"));
let cantidadArticulo = parseInt(prompt("Ingrese cuantos articulos llevara:"));

let total = (precioArticulo * cantidadArticulo)

alert(`Su compra por ${cantidadArticulo} ${nombreArticulo} es de un total de ${total}.`)