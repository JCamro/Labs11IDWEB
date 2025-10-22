promedio = 0;

for (let index = 0; index < 5; index++) {
    
    nota = parseFloat(prompt("Ingrese la nota " + (index+1) + ": "));

    while (!notaValida(nota)) {
        nota = parseFloat(prompt("Nota inválida. Ingrese la nota nuevamente" + (index+1) + ": "));
    }

    promedio += nota;
}

promedio = promedio / 5;

console.log("El promedio de las notas es: " + promedio);

function notaValida(nota) {
    if (nota>=0 && nota<=20) {
        return true;
    }
    return false;
}
