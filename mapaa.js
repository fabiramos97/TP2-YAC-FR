import fs from "fs/promises";

async function readWriteFileAsyncAwait() {
  try {
    const contenidoStr = await fs.readFile("package.json", "utf-8");
    const contenidoObj = JSON.parse(contenidoStr);
    const stats = await fs.stat("package.json");
    const size = stats.size;

    const info = { contenidoStr, contenidoObj, size };

    console.log("Mostrando info:");
    console.log(info);

    await fs.writeFile("info.txt", JSON.stringify(info, null, "\t"));
    console.log("Archivo info.txt guardado exitosamente.");
  } catch (error) {
    console.log(
      `Error en operación asincrónica con async/await: ${error.message}`
    );
  }
}

readWriteFileAsyncAwait();
