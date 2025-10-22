let numero = parseInt(prompt("Ingrese un numero: "));

console.log(`Numeros primos hasta ${numero}: `);
for (let index = 1; index <= numero; index++) {
    
    let divisores = 0;

    for(let index2 = 1; index2<=index; index2++) {
        if (index % index2 == 0) {
            divisores++;
        }
    }

    if (divisores == 2) {
        console.log(index);
    }
}