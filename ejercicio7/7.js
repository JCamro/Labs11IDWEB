let numero = parseInt(prompt("Ingrese un numero entero:"));

let billetes100 = Math.floor(numero / 100);
let billetes50 = Math.floor((numero % 100) / 50);
let billetes20 = Math.floor((numero % 50) / 20);
let billetes10 = Math.floor((numero % 20) / 10);
let billetes5 = Math.floor((numero % 10) / 5);
let billetes1 = numero % 5;

console.log(`Desglose de billetes para ${numero}:`);
console.log(`Billetes de 100: ${billetes100}`);
console.log(`Billetes de 50: ${billetes50}`);
console.log(`Billetes de 20: ${billetes20}`);
console.log(`Billetes de 10: ${billetes10}`);
console.log(`Billetes de 5: ${billetes5}`);
console.log(`Billetes de 1: ${billetes1}`);