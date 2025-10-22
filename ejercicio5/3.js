console.log("Bienvenido al programa, ingrese 10 numeros:");

contadorPares=0;
contadorImpares=0;

for (let index = 0; index < 10; index++) {
    
    numero = parseInt(prompt(`Ingrese numero ${index + 1}: `));

    if(esPar(numero)) {
        contadorPares++;
    }
    else {
        contadorImpares++;
    }
}

console.log("Cantidad de numeros pares: " + contadorPares);
console.log("Cantidad de numeros impares: " + contadorImpares);



function esPar(numero) {
    return numero % 2 == 0;
}