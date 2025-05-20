import express from "express";
import routerLibros from "./router/libros.js";

// -----------------------------------------------
//             APLICACIÓN EXPRESS
// -----------------------------------------------
const app = express();

// -----------------------------------------------
//            MIDDLEWARES EXPRESS
// -----------------------------------------------
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------------------------
//           API RESTful: libros
// -----------------------------------------------
app.use("/api/libros", routerLibros);

// -----------------------------------------------
//        LISTEN DEL SERVIDOR EXPRESS
// -----------------------------------------------
const PORT = 8080;
const server = app.listen(PORT, () =>
  console.log(`Servidor express escuchando en http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log(`Error en servidor: ${error.message}`)
);
