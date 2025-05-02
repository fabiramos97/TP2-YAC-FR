import fs from "fs";

function readWriteFileASyncCb() {
  try {
    fs.readFile("package.json", "utf-8", (error, contenidoStr) => {
      if (error)
        throw new Error(`Error en lectura asincronica: ${error.message}`);

      const contenidoObj = JSON.parse(contenidoStr);

      fs.stat("package.json", (error, stats) => {
        if (error)
          throw new Error(
            `Error al obtener tamaño del archivo: ${error.message}`
          );

        const size = stats.size;

        const info = {
          contenidoStr,
          contenidoObj,
          size,
        };

        console.log("Mostrando info:");
        console.log(info);

        fs.writeFile("info.txt", JSON.stringify(info, null, "\t"), (error) => {
          if (error)
            throw new Error(`Error en escritura asincrónica: ${error.message}`);
        });
      });
    });
  } catch (error) {
    console.log(
      `Error en operación asincrónica de lectura/escritura: ${error.message}`
    );
  }
}

readWriteFileASyncCb();
