edad = parseFloat(prompt("Ingrese su edad:"));

if (edad < 12 && edad>=0) {
    console.log("Eres Niño");
} 
else if (edad >= 12 && edad <= 17) {
    console.log("Eres Adolescente.");
}

else if (edad >= 18 && edad <= 59) {
    console.log("Eres Adulto.");
}

else if (edad >= 60) {
    console.log("Eres Adulto mayor.");
}

else {
    console.log("Edad no válida.");
}
