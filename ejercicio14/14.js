let precios = [];
let continuar = true;

let presupuesto = parseFloat(prompt("Ingrese su presupuesto máximo: "));

if (isNaN(presupuesto) || presupuesto <= 0) {
    console.log("Error, el presupuesto debe ser un número mayor a 0");
} 
else {

    let totalParcial = 0;

    while (continuar) {

        let precio = parseFloat(prompt("Ingrese el precio del producto: "));

        if (isNaN(precio) || precio <= 0) {
            console.log("Error, el precio debe ser un número mayor a 0");
        }
        else {
            // Verificamos si al agregarlo se pasa del presupuesto
            if ((totalParcial + precio) > presupuesto) {
                console.log("No se puede agregar este producto. Supera su presupuesto.");
                continuar = false;
            } 
            else {
                precios.push(precio);
                totalParcial += precio;

                console.log(`Producto agregado. Total actual: ${totalParcial.toFixed(2)}`);
                
                let respuesta = prompt("¿Desea agregar otro producto? (s/n): ").toLowerCase();
                if (respuesta !== "s") {
                    continuar = false;
                }
            }
        }
    }

    console.log("\n----- RESUMEN DE COMPRA -----");
    console.log(`Presupuesto: ${presupuesto.toFixed(2)}`);
    console.log(`Total parcial: ${totalParcial.toFixed(2)}`);

    let descuento = calcularDescuento(totalParcial);
    let totalFinal = totalParcial - descuento;

    if (descuento > 0) {
        console.log(`Descuento aplicado: ${descuento.toFixed(2)}`);
    }

    console.log(`Total final a pagar: ${totalFinal.toFixed(2)}`);
    console.log("------------------------------");
}


// ---------- FUNCIONES ---------- //

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
