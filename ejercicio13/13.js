let precios = [];
let continuar = true;

while (continuar) {
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));

    if (precio <= 0 || isNaN(precio)) {
        console.log("Error, el precio debe ser un número mayor a 0");
    }
    else {
        precios.push(precio);
    }

    let respuesta = prompt("¿Desea agregar otro producto? (s/n): ").toLowerCase();
    if (respuesta !== "s") {
        continuar = false;
    }
}

let totalParcial = calcularTotal(precios);
console.log(`\nEl total parcial a pagar es: ${totalParcial.toFixed(2)}`);

let descuento = calcularDescuento(totalParcial);
let totalFinal = totalParcial - descuento;

if (descuento > 0) {
    console.log(`Descuento aplicado: ${descuento.toFixed(2)}`);
}
console.log(`Total final a pagar: ${totalFinal.toFixed(2)}`);

function calcularTotal(lista) {
    let total = 0;

    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }

    return total;
}

function calcularDescuento(total) {

    let descuento = 0;

    if (total > 100) {
        console.log("Tiene un descuento del 10%");
        descuento = total * 0.10;
    }
    else if (total >= 50 && total <= 100) {
        console.log("Gana un cupón de 5%");
        descuento = total * 0.05;
    }
    else {
        console.log("No aplica descuento");
    }

    return descuento;
}