import fs from "fs";

const readWriteFileAsyncPromise = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("package.json", "utf-8", (error, contenidoStr) => {
      if (error) reject(`Error en lectura asincrónica: ${error.message}`);

      try {
        const contenidoObj = JSON.parse(contenidoStr);
        fs.stat("package.json", (error, stats) => {
          if (error)
            reject(`Error al obtener tamaño del archivo: ${error.message}`);

          const size = stats.size;
          const info = { contenidoStr, contenidoObj, size };
          console.log("Mostrando info:");
          console.log(info);

          fs.writeFile(
            "info.txt",
            JSON.stringify(info, null, "\t"),
            (error) => {
              if (error)
                reject(`Error en escritura asincrónica: ${error.message}`);
              resolve("Archivo info.txt guardado exitosamente.");
            }
          );
        });
      } catch (error) {
        reject(`Error al parsear JSON: ${error.message}`);
      }
    });
  });
};

readWriteFileAsyncPromise()
  .then((mensaje) => console.log(mensaje))
  .catch((error) =>
    console.log(`Error en operación asincrónica con Promises: ${error}`)
  );
