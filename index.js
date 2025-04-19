import fileUtils from "./src/utils/fileUtils.js";
import transformUtils from "./src/utils/transformUtils.js";
import apareo from "./src/apareo.js";

console.log("Empezando el programa");
console.log("-------------------------------------------------");
console.log("Leyendo los 4 archivos a memoria");
console.log("-------------------------------------------------");

const setA = fileUtils.leerArchivoComoString(
  "in/10NumerosOrdenadosEntre1y50(setA).in"
);
const setB = fileUtils.leerArchivoComoString(
  "in/10NumerosOrdenadosEntre1y50(setB).in"
);
const impares = fileUtils.leerArchivoComoString(
  "in/imparesOrdenadosEntre1y999.in"
);
const pares = fileUtils.leerArchivoComoString(
  "in/paresOrdenadosEntre2y1000.in"
);

console.log("Preparo los 4 arrays a partir de los archivo leidos");
console.log("-------------------------------------------------");

const arraySetA = transformUtils.transformarStringEnArrayDeNumeros(setA, ",");
const arraySetB = transformUtils.transformarStringEnArrayDeNumeros(setB, ",");
const arrayImpares = transformUtils.transformarStringEnArrayDeNumeros(
  impares,
  ","
);
const arrayPares = transformUtils.transformarStringEnArrayDeNumeros(pares, ",");

console.log("Array set A");
console.log(arraySetA);
console.log("Array set B");
console.log(arraySetB);
console.log("Array Impares");
console.log(arrayImpares);
console.log("Array Pares");
console.log(arrayPares);

console.log("Combino los primeros dos arrays");
console.log("-------------------------------------------------");
const combinado1 = apareo.combinarDosArrays(arraySetA, arraySetB);
const numeros1 = transformUtils.transformarArrayDeNumerosAUnSoloString(
  combinado1,
  ","
);
const write1 = fileUtils.escribirTextoEnArchivo(
  "out/combinado.out",
  numeros1,
  false
);
console.log("Archivos combinados");
console.log("-------------------------------------------------");

const archivo = fileUtils.leerArchivoComoString("out/combinado.out");

console.log(archivo);

console.log("Combinar los cuatro arrays");
console.log("-------------------------------------------------");

const combinado2 = [[arraySetA], [arraySetB], [arrayImpares], [arrayPares]];
const combinar4Arrays = apareo.combinarNArrays(combinado2);

console.log("Arrays combinados");
console.log("-------------------------------------------------");
console.log(combinar4Arrays);
const numeros2 = transformUtils.transformarArrayDeNumerosAUnSoloString(
  combinar4Arrays,
  ","
);
const write2 = fileUtils.escribirTextoEnArchivo(
  "out/combinado2.out",
  numeros2,
  true
);
console.log("Archivos combinados");
console.log("-------------------------------------------------");

const archivo2 = fileUtils.leerArchivoComoString("out/combinado2.out");

console.log(archivo2);
