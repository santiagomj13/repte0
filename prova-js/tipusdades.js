// Variables
let llistaNombres = [1, 2, 3, 4, 5];
let llistaMixta = ["Blanca", "Mateu", 33, true];


// Execució
console.log(typeof llistaNombres);     // "object" → és un array
console.log(typeof llistaMixta[1]);    // "string"
console.log(typeof llistaMixta[2]);    // "number"
console.log(typeof llistaMixta[3]);    // "boolean"


// Comprovació més exacta
console.log(Array.isArray(llistaNombres)); // true
