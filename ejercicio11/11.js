let numeroAmstrong = parseInt(prompt("Ingrese un numero: "));

numeroAmstrong = numeroAmstrong.toString();

let suma =  0;

for (let index = 0; index < numeroAmstrong.length; index++) {
    suma += parseInt(numeroAmstrong.charAt(index))**3;
}

if (suma==parseInt(numeroAmstrong)) {
    console.log(`${numeroAmstrong} es un numero Amstrong`);
}
else {
    console.log(`${numeroAmstrong} no es un numero Amstrong`);
}