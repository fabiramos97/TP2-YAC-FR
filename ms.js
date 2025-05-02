import fs from "fs";

function writeFileSync() {
  try {
    const contenidoStr = fs.readFileSync("package.json", "utf-8");
    const contenidoObj = JSON.parse(contenidoStr);
    const size = fs.statSync("package.json").size;

    const info = { contenidoStr, contenidoObj, size };

    console.log("Mostrando info:");
    console.log(info);

    fs.writeFileSync("info.txt", JSON.stringify(info, null, "\t"));
  } catch (error) {
    console.log(
      `Error en operación sincrónica de lectura/escritura: ${error.message}`
    );
  }
}

writeFileSync();
