numero = parseInt(prompt("Ingrese un numero:1"));

console.log("Tabla de multiplicar del " + numero);
for (let index = 1; index < 12; index++) {
    
    console.log(numero + " x " + index + " = " + (numero * index));
    
}