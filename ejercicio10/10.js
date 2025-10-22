function areaCirculo(radio) {
    if (radio > 0) {
        return Math.PI * (radio)**2;
    }

    return -1;
}

function areaRectangulo(largo, ancho) {
    if (largo > 0 && ancho > 0) {
        return largo * ancho;
    }

    return -1;
}
let continuar = true;

    while (continuar) {
        console.log("---Bienvenido al programa---");
        console.log("===MENU===");
        console.log("1. Calcular el area del circulo");
        console.log("2. Calcular el area del rectangulo");
        console.log("3. Salir\n");
        let opcion = parseInt(prompt("Seleccione una opcion:"));

        switch (opcion) {
            case 1:
                console.log("==Calcular el area del circulo==");
                let radio = parseFloat(prompt("Ingrese el radio del circulo:"));

                let areaCir = areaCirculo(radio);
                
                if (areaCir != -1) {
                    console.log(`El area del circulo es: ${areaCir}`);
                }
                else {
                    console.log("El radio debe ser un numero positivo.");
                }

                break;
        
            case 2:
                console.log("==Calcular el area del cuadrado==");
                let largo = parseFloat(prompt("Ingrese el largo del rectangulo:"));
                let ancho = parseFloat(prompt("Ingrese el ancho del rectangulo:"));
                let areaRec = areaRectangulo(largo, ancho);
                
                if (areaRec != -1) {
                    console.log(`El area del rectangulo es: ${areaRec}`);
                }
                else {
                    console.log("Largo y ancho deben ser numeros positivos.");
                }

                break;
        
            case 3:
                console.log("Saliendo del programa...");
                continuar = false;
                break;
        
            default:
                console.log("Opcion no valida. Intente de nuevo.");
                break;
        }
    }


