let numero = parseInt(prompt("Ingrese un numero: "));

console.log(`Sumatoria ${numero}: `);

let sumatoria = 0;
for (let index = 0; index <= numero; index++) {
    
    if (!(index % 5 == 0)) {
        sumatoria += index;
    }
}

console.log(`La sumatoria es: ${sumatoria}`);