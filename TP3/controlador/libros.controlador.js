import servicio from "../servicio/libros.servicio.js";

const obtenerLibros = (req, res) => {
  const { id } = req.params;
  if (id) {
    const libro = servicio.obtenerLibros(id);
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ mensaje: "Libro no encontrado" });
    }
  } else {
    const libros = servicio.obtenerLibros();
    res.json(libros);
  }
};

const guardarLibro = (req, res) => {
  const libro = req.body;
  const nuevoLibro = servicio.guardarLibro(libro);
  res.json(nuevoLibro);
};

const actualizarLibro = (req, res) => {
  const { id } = req.params;
  const libro = req.body;
  const LibroActualizado = servicio.actualizarLibro(id, libro);
  res
    .status(LibroActualizado ? 200 : 404)
    .json(LibroActualizado ? LibroActualizado : {});
};

const borrarLibro = (req, res) => {
  const { id } = req.params;
  const borrarLibro = servicio.borrarLibro(id);
  res.status(borrarLibro ? 200 : 404).json(borrarLibro ? borrarLibro : {});
};

export default {
  obtenerLibros,
  guardarLibro,
  actualizarLibro,
  borrarLibro,
};
