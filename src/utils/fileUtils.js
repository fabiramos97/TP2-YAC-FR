import fs, { existsSync } from "fs";

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta relativa al directorio del proyecto
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
  let archivo = null;

  try {
    archivo = fs.readFileSync(ruta, "utf-8");
  } catch (error) {
    console.log(`Error leyendo la ruta : ${error.message}`);
  }

  return archivo;
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta relativa al directorio del proyecto
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
  let archivo;

  try {
    if (existsSync(ruta)) {
      archivo = fs.writeFileSync(ruta, texto);
    } else {
      if (shouldCreateIfNotExists) {
        archivo = fs.writeFileSync(ruta, texto);
      } else {
        throw new Error("El archivo no existe");
      }
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

// exportar ambas funciones

export default {
  leerArchivoComoString,
  escribirTextoEnArchivo,
};
